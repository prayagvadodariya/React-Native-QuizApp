export const QuizList=[
    { id: 1,
      title: 'Choose',  
      image: require('../assets/images/1.png'),
      ComputerQuiz:[
        {
          question: "What is localhost's IP address?",
          answers: [
            { id: "1", text: "192.168.1.1" },
            { id: "2", text: "127.0.0.1", correct: true },
            { id: "3", text: "209.85.231.104" },
            { id: "4", text: "66.220.149.25" }
          ]
        },
        {
          question: "What kind of fruit was used to name a computer in 1984?",
          answers: [
            { id: "1", text: "Blackberry" },
            { id: "2", text: "Blueberry" },
            { id: "3", text: "Pear" },
            { id: "4", text: "Apple", correct: true }
          ]
        }
      ]
    },
    { id: 2,
      title: 'Literature',  
      image: require('../assets/images/2.png')
    },
    { id: 3,
      title: 'Geography',  
      image: require('../assets/images/3.png') 
    },
    { id: 4,
      title: 'History',  
      image: require('../assets/images/4.png') 
    },
    { id: 5,
      title: 'Pop culture',  
      image: require('../assets/images/5.png') 
    },
    { id: 6,
      title: 'Science',  
      image: require('../assets/images/6.png') 
    }
  ]

  // export const ComputerQuiz = [
  //   {
  //     question: "What is localhost's IP address?",
  //     answers: [
  //       { id: "1", text: "192.168.1.1" },
  //       { id: "2", text: "127.0.0.1", correct: true },
  //       { id: "3", text: "209.85.231.104" },
  //       { id: "4", text: "66.220.149.25" }
  //     ]
  //   },
  //   {
  //     question: "What kind of fruit was used to name a computer in 1984?",
  //     answers: [
  //       { id: "1", text: "Blackberry" },
  //       { id: "2", text: "Blueberry" },
  //       { id: "3", text: "Pear" },
  //       { id: "4", text: "Apple", correct: true }
  //     ]
  //   }
  // ];
