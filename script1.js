let currentPage = 2;
const monthsContainer = document.getElementById('monthsContainer');

const monthsPage1 = `
    <button id="prevBtn" class="nav-btn"><</button>
    <a class="month" href="january.html">1월</a>
    <a class="month" href="february.html">2월</a>
    <a class="month" href="march.html">3월</a>
    <a class="month" href="april.html">4월</a>
    <a class="month" href="may.html">5월</a>
    <a class="month" href="june.html">6월</a>
    <button id="nextBtn" class="nav-btn">></button>
`;
const monthsPage2 = `
    <button id="prevBtn" class="nav-btn"><</button>
    <a class="month" href="july.html">7월</a>
    <a class="month" href="august.html">8월</a>
    <a class="month" href="september.html">9월</a>
    <a class="month" href="october.html">10월</a>
    <a class="month" href="november.html">11월</a>
    <a class="month" href="december.html">12월</a>
    <button id="nextBtn" class="nav-btn">></button>
`;


function updateButtons() {
    document.getElementById('nextBtn').addEventListener('click', () => {
        if (currentPage === 1) {
            monthsContainer.innerHTML = monthsPage2;
            currentPage = 2;
            updateButtons(); // 새로 생성된 버튼에 이벤트 핸들러 추가
        }
    });

    document.getElementById('prevBtn').addEventListener('click', () => {
        if (currentPage === 2) {
            monthsContainer.innerHTML = monthsPage1;
            currentPage = 1;
            updateButtons(); // 새로 생성된 버튼에 이벤트 핸들러 추가
        }
    });
}

monthsContainer.innerHTML = monthsPage2;
updateButtons(); // 처음 로드 시 버튼에 이벤트 핸들러 추가