"use strict";
// Triển khai interface
class Feedback {
    constructor(id, name, score) {
        this.id = id;
        this.name = name;
        this.score = score;
    }
}
// Khai báo class triển khai các chức năng chính của ứng dụng
class FeedbackMain {
    constructor() {
        let feedbackLocal = localStorage.getItem("feedbacks");
        // Gán lại giá trị trên localStorage cho feedbacks
        this.feedbacks = feedbackLocal ? JSON.parse(feedbackLocal) : [];
    }
    // Hàm lưu dữ liệu lên localStorage
    saveFeedback() {
        localStorage.setItem("feedbacks", JSON.stringify(this.feedbacks));
    }
    // Khai báo các hàm CRUD
    createFeedback(feedback) {
        this.feedbacks.push(feedback);
        this.saveFeedback();
    }
    // Hàm xóa
    removeFeedback(id) {
        // Lọc ra những bản ghi có id khác với id cần xóa và gán lại lại cho mảng feedbacks
        this.feedbacks = this.feedbacks.filter((feedback) => feedback.id !== id);
        this.saveFeedback();
    }
    // Hàm sửa
    updateFeedback(id, name, score) {
        // Tìm vị trí của phần tử cần cập nhật trong mảng
        const findIndexFeedback = this.feedbacks.findIndex((feedback) => feedback.id === id);
        if (findIndexFeedback === -1) {
            alert("Phần tử không tồn tại trong mảng");
        }
        else {
            // Gán lại giá trị cho phần tử
            this.feedbacks[findIndexFeedback].name = name;
            this.feedbacks[findIndexFeedback].score = score;
            // Gọi hàm lưu dữ liệu
            this.saveFeedback();
        }
    }
    // Hàm tính tổng số lượng review
    totalReview() {
        return this.feedbacks.length;
    }
    // Hàm tính điểm trung bình của các feedback
    averageScore() {
        // Tính tổng điểm của các feedback
        const totalScore = this.feedbacks.reduce((prev, cur) => {
            return prev + cur.score;
        }, 0);
        return totalScore / this.totalReview();
    }
    // Hàm lấy danh sách feedback
    getAllFeedback() {
        return this.feedbacks;
    }
}
// Khai báo các biến cần thiết
let scoreValue = 6;
// Lấy ra element trong DOM
const listScoreElement = document.querySelector(".btn-score-group");
const inputElements = document.getElementById("feedbackInput");
const buttonElement = document.getElementById("btnAdd");
const listFeedbackElement = document.querySelector(".list-feedback-content");
let inputValue = "";
// Lắng nghe sự kiện onInput trong input
inputElement.addEventListener("input", (e) => {
    // Gán lại giá trị cho input cứ mỗi lần lắng nghe sự kiện oninput
    inputValue = e.target.value;
    if (e.target.value) {
        // Nếu input có giá trị thì button nhấn được
        buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.classList.add(".btn-dark");
        // Nếu có giá trị thì xóa attribute disabled
        buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.removeAttribute("disabled");
    }
    else {
        // Nếu input không có giá trị thì button không nhấn được
        buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.classList.remove(".btn-dark");
        // Nếu không có giá trị thì thêm attribute disabled
        buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.setAttribute("disabled", "");
    }
});
// Mảng danh sách điểm
const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Hàm render danh sách điểm
const renderListScores = () => {
    const scoreHtmls = scores.map((score) => {
        return `
              <button onclick=getScore(${score}) class="btn-score ${scoreValue === score ? "active" : ""}">${score}</button>
          `;
    });
    // Chuyển đổi mảng thành chuỗi
    const scoreHtml = scoreHtmls.join("");
    // Gán danh sách điểm vào trong DOM
    listScoreElement.innerHTML = scoreHtml;
};
renderListScores();
// Hàm lấy số điểm
const getScore = (score) => {
    // Gán lại giá trị cho biến scoreValue
    scoreValue = score;
    // Gọi hàm render danh sách điểm
    renderListScores();
};
// Khởi tạo đối tượng FeedbackMain
const feedbackMain = new FeedbackMain();
// Hiển thị danh sách feedback ra ngoài giao diện
const renderFeedbacks = () => {
    const listFeedback = feedbackMain.getAllFeedback();
    const feedbackHtmls = listFeedback.map((feedback) => {
        return `
      <div class="feedback-content">
        <div class="feedback-content-header">
          <i class="fa-solid fa-pen-to-square" ></i>
          <i
            id="delete_18cdcd9b-fccc-4ded-81f9-55b249181d63"
            class="fa-solid fa-xmark"
          ></i>
        </div>
        <div class="feedback-content-body">
          <p class="content-feedback">${feedback.name}</p>
        </div>
        <button class="btn-score active">${feedback.score}</button>
      </div>
      `;
    });
    // Chuyển đổi mảng thành chuỗi HTML
    const feedbackHtml = feedbackHtmls.join("");
    // Gán chuỗi HTML vào trong DOM
    listFeedbackElement.innerHTML = feedbackHtml;
};
renderFeedbacks();
// Thêm mới dữ liệu lên localStorgae
const createFeedback = () => {
    const newId = Math.ceil(Math.random() * 10000);
    const feedback = new Feedback(newId, inputValue, scoreValue);
    // Gọi hàm thêm mới Feedback
    feedbackMain.createFeedback(feedback);
    // Reset giá trị trong ô input
    inputElement.value = "";
    // Gọi hàm render danh sách feedback
    renderFeedbacks();
};
