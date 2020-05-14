console.log(1)

const questionCont = document.querySelectorAll('.faq__question-container')

const answerContainer = document.querySelectorAll('.faq__answer-container')

answerContainer.forEach(answer => {
    answer.classList.add("inactive")
})

questionCont.forEach(question => {
    question.addEventListener("click", ()=> {
        const angleArrow = question.lastElementChild
        const answer = question.nextElementSibling
        if(answer.classList.contains('inactive')){
            answer.classList.remove('inactive')
            answer.classList.add('active')
            angleArrow.classList.add('rotated')
        } else {
            answer.classList.remove('active')
            answer.classList.add('inactive')
            angleArrow.classList.remove('rotated')
        }

    })
})