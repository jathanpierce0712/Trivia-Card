$(document).ready(() =>{
	$('.hint-box').on('click', () => {
		$('.hint').slideToggle(500)
  })
  $('.wrong-answer-one').on('click', () => {
    $('.wrong-text-one').fadeOut('slow')
    $('.frown').show()
  })
  $('.wrong-answer-two').on('click', () => {
    $('.wrong-text-two').fadeOut('slow')
    $('.frown').show()
  })
  $('.wrong-answer-three').on('click', () => {
    $('.wrong-text-three').fadeOut('slow')
    $('.frown').show()
  })
  $('.correct-answer').on('click', () => {
    $('.frown').hide()
    $('.smiley').show()
    $('.wrong-text-one').fadeOut('slow')
    $('.wrong-text-two').fadeOut('slow')
    $('.wrong-text-three').fadeOut('slow')
    const nextQ = $('<input type="button" value="Next Question"/>');
    $(".question-text").append(nextQ);
  })
  let i = 0;
  $('.question-text').on('click', () => {
    $('.smiley').hide()

    if(i > questions.length -1){
     
      $(".answer-text").hide()
      $(".question-text").html('Finished!!!')
    } else {
      $('.question-text').html(questions[i].q)
      $('.hint').hide()
      $(".wrong-text-one").html(questions[i].a)
      $(".wrong-text-two").html(questions[i].b)
      $(".wrong-text-three").html(questions[i].c)
      $(".correct-answer-text").html(questions[i].d)
      $(".answer-text").fadeIn("fast")
      i = increment(i)
      console.log(`After the else i = ${i}`)
		}
  })
	const increment = (val) =>{
    val=val+1
    return val
  }
});

const questions = [
	{
    'q': 'What is the capital of Maine?',
    'a': 'Boonville',
    'b': 'Townshipton',
    'c': 'Woodsvale',
    'd': 'Homeland'
  },
  {
    'q': 'What is the capital of NH?',
    'a': 'Boonville',
    'b': 'Townshipton',
    'c': 'Woodsvale',
    'd': 'Homeland'
  },
  {
    'q': 'What is the capital of California?',
    'a': 'Boonville',
    'b': 'Townshipton',
    'c': 'Woodsvale',
    'd': 'Homeland'
  },
  {
    'q': 'What is the capital of Vermont?',
    'a': 'Boonville',
    'b': 'Townshipton',
    'c': 'Woodsvale',
    'd': 'Homeland',
  }