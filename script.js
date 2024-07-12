let currentPage = 1;
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

updateButtons(); // 처음 로드 시 버튼에 이벤트 핸들러 추가


document.querySelectorAll('.scrollable').forEach(slider => {
    // 스크롤 이벤트 핸들러 등록




let isDown = false;
let startX;
let scrollLeft;
let startTime;
let moved = false;

slider.addEventListener('mousedown', (e) => {
isDown = true;
slider.classList.add('active');
startX = e.pageX - slider.offsetLeft;
scrollLeft = slider.scrollLeft;
startTime = new Date().getTime();
moved = false;
});

slider.addEventListener('mouseleave', () => {
isDown = false;
slider.classList.remove('active');
});

slider.addEventListener('mouseup', (e) => {
isDown = false;
slider.classList.remove('active');

const endTime = new Date().getTime();
const timeDiff = endTime - startTime;
const x = e.pageX - slider.offsetLeft;
const walk = Math.abs(x - startX);
if (timeDiff < 150 && walk < 10) {
    moved = false;
} else {
    moved = true;
}
});

slider.addEventListener('mousemove', (e) => {
if (!isDown) return;
e.preventDefault();
const x = e.pageX - slider.offsetLeft;
const walk = (x - startX) * 2;
slider.scrollLeft = scrollLeft - walk;
moved = true;
});

slider.querySelectorAll('a').forEach(link => {
link.addEventListener('click', (e) => {
    if (moved) {
        e.preventDefault();
    }
});
});
});
