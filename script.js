// --- 1. 資料庫：請在此修改您的姓名和座位資料 ---
const seatData = [
    { name: "王小明", seat: "A01" },
    { name: "李大華", seat: "B12" },
    { name: "陳美玲", seat: "C05" },
    { name: "林志傑", seat: "A02" },
    { name: "吳雅君", seat: "B08" },
    { name: "黃小恩", seat: "C10" },
    { name: "鄭偉", seat: "A03" },
    { name: "張明華", seat: "B01" },
    // 您可以繼續新增更多資料：
    // { name: "新增姓名", seat: "座位號碼" },
];

// --- 2. 程式碼邏輯 (一般情況下不需要修改) ---
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results-container');

/**
 * 執行搜尋邏輯並更新結果顯示
 */
function performSearch() {
    const query = searchInput.value.trim().toLowerCase();
    
    // 如果輸入框是空的，顯示「無搜尋結果」的提示
    if (query === "") {
        resultsContainer.innerHTML = `
            <div class="no-results">
                目前無搜尋結果。請開始輸入姓名。
            </div>
        `;
        return;
    }

    // 過濾資料：尋找名字中包含查詢字串的項目
    const filteredResults = seatData.filter(item => 
        item.name.toLowerCase().includes(query)
    );

    // 渲染結果到 HTML
    if (filteredResults.length > 0) {
        let resultsHtml = '';
        
        filteredResults.forEach(item => {
            resultsHtml += `
                <div class="result-item">
                    <span class="name">姓名: <strong class="name">${item.name}</strong></span>
                    <span class="seat-info">座位: <strong class="seat">${item.seat}</strong></span>
                </div>
            `;
        });
        
        resultsContainer.innerHTML = resultsHtml;
    } else {
        // 如果沒有找到結果
        resultsContainer.innerHTML = `
            <div class="no-results">
                查無與「${searchInput.value}」相關的姓名，請檢查輸入是否正確。
            </div>
        `;
    }
}

// 監聽輸入框的輸入事件 (當使用者打字時就觸發搜尋)
searchInput.addEventListener('input', performSearch);

// 首次載入時，清除結果容器，顯示初始提示
window.onload = function() {
    resultsContainer.innerHTML = `
        <div class="no-results">
            目前無搜尋結果。請開始輸入姓名。
        </div>
    `;
}