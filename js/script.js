document.addEventListener('DOMContentLoaded', function(){
    function MODAL() {
        function showModal() {
            const modalObj = {
                modalBlock: document.querySelector(".modal"),
                modalBlockForm: document.querySelector(".modal-form"),
                modalBlockSuccess: document.querySelector(".modal-success"),
                successData: false
            }
    
            function checkModalClick(e) {
                const target = e.target;
    
                if (target.classList.contains("modal")) {
                    modalObj.modalBlock.style = "display: none";
                    modalObj.modalBlockForm.classList.remove("activeModal");
                    modalObj.modalBlockSuccess.classList.remove("activeModal");
                }
            }
    
            function clickModalForm(e) {
                e.preventDefault();
                const target = e.target;
    
                if (target.classList.contains("close-modal")) {
                    modalObj.modalBlock.style = "display: none";
                    modalObj.modalBlockForm.classList.remove("activeModal");
                }
    
                if (target.offsetParent.classList.contains("get-btn")) {
                    const inputs = modalObj.modalBlockForm.querySelectorAll("input")
    
                    inputs.forEach(function(item, num, arr) {
                        item.value.length === 0 ? modalObj.successData = false : modalObj.successData = true
                    })
    
                    if (modalObj.successData) {
                        inputs.forEach(function(item, num, arr) {
                            item.value = ""
                        })
                        modalObj.modalBlockForm.classList.remove("activeModal");
                        modalObj.modalBlockSuccess.classList.add("activeModal");
                    }
                }
            }
    
            function clickModalSuccess(e) {
                e.preventDefault();
                const target = e.target;
    
                if (target.classList.contains("close-modal")) {
                    modalObj.modalBlock.style = "display: none";
                    modalObj.modalBlockSuccess.classList.remove("activeModal");
                }
            }
    
            //отображаю блок модальных окон
            modalObj.modalBlock.style = "display: flex";
            //делаю активным модальное окно заполнения формы
            modalObj.modalBlockForm.classList.add("activeModal");
    
            modalObj.modalBlock.onclick = checkModalClick;
            modalObj.modalBlockForm.onclick = clickModalForm;
            modalObj.modalBlockSuccess.onclick = clickModalSuccess;
        }
        
        function checkClickTarget(e) {
            const target = e.target;
    
            if (target.classList.contains("get-btn") || target.classList.contains("header-online__link")) {
                showModal()
            }
        }
    
        const documentBlock = document.querySelector("body");
    
        documentBlock.onclick = checkClickTarget;
    }

    MODAL()

    function PARALAX() {
        const paralaxImages = {
            girlImg: document.querySelector(".main .main-right .right-girl"),
            shapeImg: document.querySelector(".main .main-left .left-shape")
        }

        if (document.documentElement.clientWidth < 992) {
            paralaxImages.girlImg.style = "transform-style: preserve-3d; backface-visibility: hidden; transform: translate3d(0px," + -pageYOffset*6 + "px, 0px)";
            paralaxImages.shapeImg.style = "transform-style: preserve-3d; backface-visibility: hidden; transform: translate3d(0px," + pageYOffset/3 + "px, 0px)";
        }

        paralaxImages.girlImg.style = "transform-style: preserve-3d; backface-visibility: hidden; transform: translate3d(0px," + -pageYOffset/2 + "px, 0px)";
        paralaxImages.shapeImg.style = "transform-style: preserve-3d; backface-visibility: hidden; transform: translate3d(0px," + pageYOffset + "px, 0px)";
    }

    window.addEventListener('scroll', PARALAX);
    window.addEventListener('resize', PARALAX);
});