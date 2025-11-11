import { create } from 'zustand';

export const useProductStore = create((set, get) => ({
  // 상품목록을 담을 배열
  items: [],
  // 카트에 담은 상품을 저장할 배열
  cartItems: [],
  // 카트에 담긴 상품의 개수
  cartCount: 0,
  // 총금액
  totalPrice: 0,

  // 검색어를 저장할 변수
  searchWord: '',

  // 검색어를 저장할 메서드
  setSearchWord: (word) => set({ searchWord: word }),
  clearSearch: () => set({ searchWord: '' }),

  // ====외부 데이터를 불러서 ====
  onFecthItems: async () => {
    // 배열에 데이터가 들어있는지 체크하여 있으면 배열 데이터를 그냥 사용
    const existing = get().items;
    if (existing.length > 0) return;

    // 없으면 외부 데이터 불러와서 items 배열에 넣기
    // fetch("https://fakestoreapi.com/products")
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    console.log(data);
    set({ items: data });
  },

  // 불러진 데이터를 카테고리별로 분리하기
  onItemCategory: (cate) => {
    const allItems = get().items;
    if (!cate || cate === 'all') return allItems;
    return allItems.filter((item) => item.category === cate);

    // if(!cate || cate === "all") {return allItems}
    //     else{ }
  },

  // ---------------- 장바구니 -----------------

  onAddToCart: (product) => {
    // let updateCart;
    // // 사이즈 같은 요소를 다시 담기를 했으면 이미 장바구니에 있는 제품이므로 개수만 증가
    // // 사이즈가 다른 요소를 담을땐 새로 담기
    // set((state) => {
    //   const existing = state.cartItems.find(
    //     (item) => item.id === product.id && item.size === product.size
    //   );

    //   if (existing) {
    //     // 다른 재품은 그냥 담고, 같은 제품은 개수를 변경시키기
    //     updateCart = state.cartItems.map((item) =>
    //       item.id === product.id && item.size === product.size
    //         ? { ...item, count: item.count + product.count }
    //         : item
    //     );
    //   } else {
    //     updateCart = [...state.cartItems, { ...product, count: product.count || 1 }];
    //   }
    //   return { cartItems: updateCart, cartCount: updateCart.length };
    // });

    console.log(product);
    const cart = get().cartItems;
    // 새로 추가된 상품이 기존 카트에 있는 상품인지 체크하기
    // map, filter(조건에 맞는 요소를 찾아서 새로운 배열 만들기),
    // find(조건에 맞는 요소가 있음 true, 없으면 false)
    const existing = cart.find((item) => item.id === product.id && item.size === product.size);
    let updateCart;
    // 기존 카트에 있는 제품이면 수량만 변경되도록
    // 동일 상품이 아닌 경우만 카트에 추가
    if (existing) {
      updateCart = cart.map((item) =>
        item.id === product.id && item.size === product.size
          ? { ...item, count: item.count + product.count }
          : item
      );
    } else {
      updateCart = [...cart, { ...product }];
    }

    // 총 구매 금액
    let total = 0;
    // 총 금액 구하기
    updateCart.forEach((item) => {
      total += item.price * item.count;
    });

    set({
      cartItems: updateCart,
      cartCount: updateCart.length,
      totalPrice: total,
    });
  },

  // 장바구니 제품 삭제
  onRemoveCart: (id, size) => {
    console.log(id, size);
    const cart = get().cartItems;
    const updateCart = cart.filter((ca) => !(ca.id === id && ca.size === size));

    // 총 금액 계산
    let total = 0;
    updateCart.forEach((item) => {
      total += item.price * item.count;
    });

    set({
      cartItems: updateCart,
      cartCount: updateCart.length,
      totalPrice: total,
    });
  },

  // 장바구니의 +
  onPlusCount: (id, size) => {
    console.log('증가');
    const cart = get().cartItems;
    const updateCart = cart.map((item) =>
      item.id === id && item.size === size ? { ...item, count: item.count + 1 } : item
    );

    // 총 금액 계산
    let total = 0;
    updateCart.forEach((item) => {
      total += item.price * item.count;
    });

    set({
      cartItems: updateCart,
      totalPrice: total,
    });
  },

  // 장바구니의 -
  onMinusCount: (id, size) => {
    console.log('감소');
    const cart = get().cartItems;
    const updateCart = cart.map((item) =>
      item.id === id && item.size === size ? { ...item, count: Math.max(1, item.count - 1) } : item
    );

    // 총 금액계산
    let total = 0;
    updateCart.forEach((item) => {
      total += item.price * item.count;
    });

    set({
      cartItems: updateCart,
      totalPrice: total,
    });
  },

  //----------------- 찜하기 -----------------

  //찜목록을 저장할 배열
  wishList: [],
  onAddWishList: (product) => {
    console.log('찜');
  },

  // 배송관련
}));
