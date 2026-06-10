// --- 1. 資料庫：請在此修改您的姓名和座位資料 ---
const seatData = [
{ name: "陳姿禎", seat: "第1桌" },
{ name: "陳巧宜", seat: "第1桌" },
{ name: "陳珮禎", seat: "第1桌" },
{ name: "鄭玉雲", seat: "第1桌" },
{ name: "陳柏儒", seat: "第1桌" },
{ name: "黃玉琪", seat: "第1桌" },
{ name: "陳奕臻", seat: "第2桌" },
{ name: "邱柏勛", seat: "第2桌" },
{ name: "Su紀惟", seat: "第2桌" },
{ name: "葉思辰", seat: "第2桌" },
{ name: "林郁軒", seat: "第2桌" },
{ name: "陳柏凱", seat: "第3桌" },
{ name: "陳泰誠", seat: "第3桌" },
{ name: "呂勉吾", seat: "第3桌" },
{ name: "楊世豪", seat: "第3桌" },
{ name: "林品伃", seat: "第4桌" },
{ name: "陳旻辤", seat: "第4桌" },
{ name: "彭靖芳", seat: "第4桌" },
{ name: "楊巧薇", seat: "第4桌" },
{ name: "簡廷宇", seat: "第4桌" },
{ name: "陳培松", seat: "第5桌" },
{ name: "蘇春文", seat: "第5桌" },
{ name: "張建郎", seat: "第5桌" },
{ name: "王清泉", seat: "第5桌" },
{ name: "許志成", seat: "第5桌" },
{ name: "陳瑞明", seat: "第5桌" },
{ name: "謝宗諺", seat: "第6桌" },
{ name: "官庭昱", seat: "第6桌" },
{ name: "官沛宸", seat: "第6桌" },
{ name: "葉博森", seat: "第6桌" },
{ name: "葉庭", seat: "第6桌" },
{ name: "周士誠", seat: "第6桌" },
{ name: "林譽蓉", seat: "第6桌" },
{ name: "謝明鈞", seat: "第6桌" },
{ name: "范真銘", seat: "第7桌" },
{ name: "陳聖劻", seat: "第7桌" },
{ name: "陳美瑜", seat: "第7桌" },
{ name: "陳育銘", seat: "第7桌" },
{ name: "魏聖安", seat: "第7桌" },
{ name: "孫啟翔", seat: "第7桌" },
{ name: "陳國禎", seat: "第7桌" },
{ name: "鄭亦凱", seat: "第7桌" },
{ name: "梁家瑋", seat: "第8桌" },
{ name: "嚴和霖", seat: "第8桌" },
{ name: "沈仁宗", seat: "第8桌" },
{ name: "王培珞", seat: "第8桌" },
{ name: "呂佳明", seat: "第8桌" },
{ name: "徐鎮鴻", seat: "第8桌" },
{ name: "謝孟承", seat: "第9桌" },
{ name: "游凱翔", seat: "第9桌" },
{ name: "詹閔傑", seat: "第9桌" },
{ name: "洪邦溢", seat: "第9桌" },
{ name: "黃惠儀", seat: "第9桌" },
{ name: "林俊諺", seat: "第9桌" },
{ name: "林宜蓁", seat: "第9桌" },
{ name: "陳玉華", seat: "第10桌" },
{ name: "黃炳毓", seat: "第10桌" },
{ name: "黃國彥", seat: "第10桌" },
{ name: "林素卿", seat: "第10桌" },
{ name: "陳淑麗", seat: "第10桌" },
{ name: "陳淵谷", seat: "第10桌" },
{ name: "魏溱誼", seat: "第10桌" },
{ name: "侯雅瑩", seat: "第10桌" },
{ name: "陳詠捷", seat: "第10桌" },
{ name: "劉勝宗", seat: "第11桌" },
{ name: "黃美蓮", seat: "第11桌" },
{ name: "劉哲瑋", seat: "第11桌" },
{ name: "黃美雲", seat: "第11桌" },
{ name: "林千惠", seat: "第11桌" },
{ name: "莊明智", seat: "第12桌" },
{ name: "黃美華", seat: "第12桌" },
{ name: "莊雅筑", seat: "第12桌" },
{ name: "莊丞暘", seat: "第12桌" },
{ name: "莊丞瑋", seat: "第12桌" },
{ name: "蔡岳庭", seat: "第12桌" },
{ name: "塗懋軒", seat: "第12桌" },
{ name: "吳承翰", seat: "第12桌" },
{ name: "吳致翰", seat: "第12桌" },
{ name: "林水源", seat: "第13桌" },
{ name: "古梓明", seat: "第13桌" },
{ name: "吳炳煌", seat: "第13桌" },
{ name: "柯位良", seat: "第13桌" },
{ name: "楊正聰", seat: "第13桌" },
{ name: "高進富", seat: "第13桌" },
{ name: "林文仁", seat: "第13桌" },
{ name: "呂世賢", seat: "第13桌" },
{ name: "吳淵源", seat: "第13桌" },
{ name: "歐芝伊", seat: "第14桌" },
{ name: "葉羿貝", seat: "第14桌" },
{ name: "蕭怡濃", seat: "第14桌" },
{ name: "曾成", seat: "第14桌" },
{ name: "Monica", seat: "第14桌" },
{ name: "王素鄉", seat: "第15桌" },
{ name: "黃衍儒", seat: "第15桌" },
{ name: "黃國洲", seat: "第15桌" },
{ name: "黃玲慧", seat: "第15桌" },
{ name: "許育慈", seat: "第15桌" },
{ name: "李阿美", seat: "第16桌" },
{ name: "呂文欽", seat: "第16桌" },
{ name: "黃麗君", seat: "第16桌" },
{ name: "陳順等", seat: "第16桌" },
{ name: "黃麗萍", seat: "第16桌" },
{ name: "黃文卿", seat: "第16桌" },
{ name: "邱素芬", seat: "第16桌" },
{ name: "楊鐘鼎", seat: "第16桌" },
{ name: "楊善融", seat: "第16桌" },
{ name: "戴楊桃", seat: "第16桌" },
{ name: "羅顯光", seat: "第17桌" },
{ name: "羅祥梅", seat: "第17桌" },
{ name: "蕭局輝", seat: "第17桌" },
{ name: "羅慧萍", seat: "第17桌" },
{ name: "羅翊寧", seat: "第17桌" },
{ name: "莊朝有", seat: "第17桌" },
{ name: "趙德生", seat: "第18桌" },
{ name: "王惠雲", seat: "第18桌" },
{ name: "李雅萍", seat: "第18桌" },
{ name: "陳添金", seat: "第18桌" },
{ name: "劉瀚璟", seat: "第18桌" },
{ name: "陳敬義", seat: "第18桌" },
{ name: "許惠婷", seat: "第18桌" },
{ name: "陳威祐", seat: "第18桌" },
{ name: "陳威宇", seat: "第18桌" },
{ name: "李昕蒲", seat: "第19桌" },
{ name: "林真德", seat: "第19桌" },
{ name: "許佑加", seat: "第19桌" },
{ name: "郭逸仁", seat: "第19桌" },
{ name: "謝宗彧", seat: "第19桌" },
{ name: "張惟珽", seat: "第19桌" },
{ name: "劉彥辰", seat: "第19桌" },
{ name: "吳祖紜", seat: "第20桌" },
{ name: "楊雅甯", seat: "第20桌" },
{ name: "李昱嫻", seat: "第20桌" },
{ name: "呂捷", seat: "第20桌" },
{ name: "林宛瑩", seat: "第20桌" },
{ name: "林昕葦", seat: "第20桌" },
{ name: "呂侑家", seat: "第20桌" },
{ name: "祝婕睿", seat: "第20桌" },
{ name: "蕭言耕", seat: "第20桌" },
{ name: "侯美芩", seat: "第21桌" },
{ name: "陶琪然", seat: "第21桌" },
{ name: "顏錫堅", seat: "第21桌" },
{ name: "陳豪吉", seat: "第21桌" },
{ name: "彭曉萍", seat: "第21桌" },
{ name: "張永明", seat: "第21桌" },
{ name: "陳永傑", seat: "第21桌" },
{ name: "范佑誠", seat: "第22桌" },
{ name: "汪廷彥", seat: "第22桌" },
{ name: "黃國亭", seat: "第22桌" },
{ name: "詹旻霓", seat: "第22桌" },
{ name: "陳文信", seat: "第22桌" },
{ name: "蔡欣局", seat: "第22桌" },
{ name: "林伯勳", seat: "第22桌" },
{ name: "周姿良", seat: "第22桌" },
{ name: "葉承軒", seat: "第22桌" },
{ name: "洪廣芝", seat: "第23桌" },
{ name: "吳念庭", seat: "第23桌" },
{ name: "宋思穎", seat: "第23桌" },
{ name: "吳進義", seat: "第23桌" },
{ name: "何胤誼", seat: "第23桌" },
{ name: "Owen(鄭宇軒）", seat: "第23桌" },
{ name: "楊俊德", seat: "第24桌" },
{ name: "柯大凱", seat: "第24桌" },
{ name: "林千鈺", seat: "第24桌" },
{ name: "陳巧玲", seat: "第24桌" },
{ name: "翟涵薇", seat: "第24桌" },
{ name: "張君蘭", seat: "第24桌" },
{ name: "巫兪霈", seat: "第24桌" },
{ name: "郭鈺昕", seat: "第24桌" },
{ name: "王韡蒨", seat: "第24桌" },
{ name: "鍾怡婷", seat: "第24桌" },
{ name: "陳貽瑱", seat: "主桌" },
{ name: "黃瑜琛", seat: "主桌" },
{ name: "陳宏泰", seat: "主桌" },
{ name: "陳麗淇", seat: "主桌" },
{ name: "陳菽霖", seat: "主桌" },
{ name: "陳淑惠", seat: "主桌" },
{ name: "謝詠濬", seat: "主桌" },
{ name: "黃建成", seat: "主桌" },
{ name: "陳淑娥", seat: "主桌" }
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
