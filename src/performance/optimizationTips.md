# React Performance Optimization Tips

## ✅ 1. Use React.memo
Prevents unnecessary re-renders of components.

---

## ✅ 2. Use useMemo
Memoizes expensive calculations.

---

## ✅ 3. Use useCallback
Prevents unnecessary function recreation.

---

## ✅ 4. Code Splitting
Split code using React.lazy and Suspense.

---

## ✅ 5. Avoid Unnecessary State
Keep state minimal and only where needed.

---

## ✅ 6. Key Props in Lists
Always use unique keys in lists to improve rendering.

---

## ✅ 7. Avoid Inline Functions (in large apps)
Can cause unnecessary re-renders.

---

## ✅ 8. Virtualization
Use libraries like react-window for large lists.

---

## ✅ 9. Debouncing & Throttling
Optimize API calls and input handling.

---

## ✅ 10. Use Production Build
Run `npm run build` for optimized code.

---

# ✅ Interview Tip

👉 Always explain performance optimization like this:

1. Problem (unnecessary re-renders)
2. Solution (memoization, lazy loading)
3. Tools (memo, useMemo, useCallback)