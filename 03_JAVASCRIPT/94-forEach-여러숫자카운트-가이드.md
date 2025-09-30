# forEach 여러숫자 카운트 - 총합계 계산 가이드

## 📋 프로젝트 개요
JavaScript의 `forEach`를 사용하여 여러 상품의 수량을 카운트하고 총합계를 계산하는 프로젝트

## 🏗️ HTML 구조

```html
<div class="goods-wrap">
    <div class="goods-list">
        <div class="count1">
            <div class="items-name">
                <strong>1,000</strong>
            </div>
            <div class="button-wrap">
                <button class="minus">-</button>
                <span>0</span>
                <button class="plus">+</button>
            </div>
        </div>
        <div class="count2">
            <div class="items-name">
                <strong>2,000</strong>
            </div>
            <div class="button-wrap">
                <button class="minus">-</button>
                <span>0</span>
                <button class="plus">+</button>
            </div>
        </div>
        <div class="count3">
            <div class="items-name">
                <strong>3,000</strong>
            </div>
            <div class="button-wrap">
                <button class="minus">-</button>
                <span>0</span>
                <button class="plus">+</button>
            </div>
        </div>
    </div>
    <div class="total">총합계:<span>0</span>원</div>
</div>
```

## 💻 JavaScript 핵심 코드

### 1. 변수 선언
```javascript
let minusBtn = document.querySelectorAll('.goods-list .minus');
let plusBtn = document.querySelectorAll('.goods-list .plus');
let total = document.querySelector('.total span');
```

### 2. 총합계 계산 함수
```javascript
function updateTotal() {
    console.log("updateTotal 호출됨!");
    let totalSum = 0;
    
    let items = document.querySelectorAll('.goods-list > div');
    
    items.forEach((item) => {
        // 쉼표가 포함된 가격 텍스트를 숫자로 변환
        let priceText = item.querySelector('.items-name strong').innerText;
        let price = parseInt(priceText.replace(/,/g, ''));
        
        // 수량 가져오기
        let count = parseInt(item.querySelector('.button-wrap span').innerText);
        
        // 총합계 계산
        totalSum += (price * count);
    });
    
    // 원화 포맷으로 표시
    let formattedTotal = totalSum.toLocaleString('ko-KR');
    total.innerText = formattedTotal;
}
```

### 3. 버튼 이벤트 처리
```javascript
// + 버튼 클릭 이벤트
plusBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        let spanCount = btn.previousElementSibling;
        let count = parseInt(spanCount.innerText);
        count++;
        spanCount.innerText = count;
        updateTotal();
    });
});

// - 버튼 클릭 이벤트
minusBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        let spanCount = btn.nextElementSibling;
        let count = parseInt(spanCount.innerText);
        if (count > 0) {
            count--;
            spanCount.innerText = count;
            updateTotal();
        }
    });
});
```

## 🔑 핵심 개념 설명

### forEach란?
- 배열의 각 요소에 대해 주어진 함수를 실행하는 메서드
- 반복문보다 간결하고 읽기 쉬운 코드 작성 가능

### 쉼표 처리 문제
**문제점:**
```javascript
parseInt("1,000")  // 결과: 1 ❌
parseInt("2,000")  // 결과: 2 ❌
```

**해결방법:**
```javascript
parseInt("1,000".replace(/,/g, ''))  // 결과: 1000 ✅
parseInt("2,000".replace(/,/g, ''))  // 결과: 2000 ✅
```

### 원화 포맷팅
```javascript
let number = 12000;
let formatted = number.toLocaleString('ko-KR');  // "12,000"
```

## 📊 계산 예시

| 상품 | 가격 | 수량 | 소계 |
|------|------|------|------|
| 상품1 | 1,000원 | 2개 | 2,000원 |
| 상품2 | 2,000원 | 3개 | 6,000원 |
| 상품3 | 3,000원 | 1개 | 3,000원 |
| **총합계** | | | **11,000원** |

## 🎯 주요 기능
1. ✅ 수량 증가/감소 버튼
2. ✅ 실시간 총합계 계산
3. ✅ 원화 포맷 표시 (천단위 쉼표)
4. ✅ 음수 방지 (0 이하로 내려가지 않음)
5. ✅ 쉼표 포함 가격 처리

## 🚨 주의사항
- `.total` div는 `.goods-list` 밖에 위치해야 함
- 쉼표가 포함된 가격은 `replace(/,/g, '')`로 처리 필요
- `parseInt()`는 숫자가 아닌 문자를 만나면 변환 중단

## 🛠️ 확장 가능성
- 상품 추가/삭제 기능
- 할인율 적용
- 세금 계산
- 로컬 스토리지 저장
- 서버 연동

---
**작성일:** 2025년 9월 30일  
**파일명:** 94-forEach-여러숫자카운트.html