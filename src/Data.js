import john from './Imgs/john-doe.png'
import sarah from './Imgs/sarah-edo.png'
import tyler from './Imgs/tyler-mcginnis.png'
//get numer of answers 
//Object.keys(users.sarahedo.answers).length


//turn object of object to array of object 
//const arrayOfObj = Object.entries(objOfObjs).map((e) => ( { [e[0]]: e[1] } ));

 let users = {
    sarahedo: {
      id: 'sarahedo',
      name: 'Sarah Edo',
      avatarURL: sarah,
      answers: {
        "8xf0y6ziyjabvozdd253nd": 'optionOne',
        "6ni6ok3ym7mf1p33lnez": 'optionTwo',
        "am8ehyc8byjqgar0jgpub9": 'optionTwo',
        "loxhs1bqm25b708cmbf3g": 'optionTwo'
      },
      questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
    },
    tylermcginnis: {
      id: 'tylermcginnis',
      name: 'Tyler McGinnis',
      avatarURL: tyler,
      answers: {
        "vthrdm985a262al8qx3do": 'optionOne',
        "xj352vofupe1dqz9emx13r": 'optionTwo',
      },
      questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
    },
    johndoe: {
      id: 'johndoe',
      name: 'John Doe',
      avatarURL: john,
      answers: {
        "xj352vofupe1dqz9emx13r": 'optionOne',
        "vthrdm985a262al8qx3do": 'optionTwo',
        "6ni6ok3ym7mf1p33lnez": 'optionTwo'
      },
      questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
    }
  }
  
  let questions = {
    "8xf0y6ziyjabvozdd253nd": {
      id: '8xf0y6ziyjabvozdd253nd',
      author: 'sarahedo',
      timestamp: 1467166872634,
      optionOne: {
        votes: ['sarahedo'],
        text: 'have horrible short term memory',
      },
      optionTwo: {
        votes: [],
        text: 'have horrible long term memory'
      }
    },
    "6ni6ok3ym7mf1p33lnez": {
      id: '6ni6ok3ym7mf1p33lnez',
      author: 'johndoe',
      timestamp: 1468479767190,
      optionOne: {
        votes: [],
        text: 'become a superhero',
      },
      optionTwo: {
        votes: ['johndoe', 'sarahedo'],
        text: 'become a supervillain'
      }
    },
    "am8ehyc8byjqgar0jgpub9": {
      id: 'am8ehyc8byjqgar0jgpub9',
      author: 'sarahedo',
      timestamp: 1488579767190,
      optionOne: {
        votes: [],
        text: 'be telekinetic',
      },
      optionTwo: {
        votes: ['sarahedo'],
        text: 'be telepathic'
      }
    },
    "loxhs1bqm25b708cmbf3g": {
      id: 'loxhs1bqm25b708cmbf3g',
      author: 'tylermcginnis',
      timestamp: 1482579767190,
      optionOne: {
        votes: [],
        text: 'be a front-end developer',
      },
      optionTwo: {
        votes: ['sarahedo'],
        text: 'be a back-end developer'
      }
    },
    "vthrdm985a262al8qx3do": {
      id: 'vthrdm985a262al8qx3do',
      author: 'tylermcginnis',
      timestamp: 1489579767190,
      optionOne: {
        votes: ['tylermcginnis'],
        text: 'find $50 yourself',
      },
      optionTwo: {
        votes: ['johndoe'],
        text: 'have your best friend find $500'
      }
    },
    "xj352vofupe1dqz9emx13r": {
      id: 'xj352vofupe1dqz9emx13r',
      author: 'johndoe',
      timestamp: 1493579767190,
      optionOne: {
        votes: ['johndoe'],
        text: 'write JavaScript',
      },
      optionTwo: {
        votes: ['tylermcginnis'],
        text: 'write Swift'
      }
    },
  }
  
  function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }
  
  export function _getUsers () {
    return new Promise((res, rej) => {
      setTimeout(() => res({...users}), 1000)
    })
  }
  
  export function _getQuestions () {
    return new Promise((res, rej) => {
      setTimeout(() => res({...questions}), 1000)
    })
  }
  
  function formatQuestion ({ optionOneText, optionTwoText, author }) {
    return {
      id: generateUID(),
      timestamp: Date.now(),
      author,
      optionOne: {
        votes: [],
        text: optionOneText,
      },
      optionTwo: {
        votes: [],
        text: optionTwoText,
      }
    }
  }
  
  export function _saveQuestion (question) {
    return new Promise((res, rej) => {
      const authedUser = question.author;
      const formattedQuestion = formatQuestion(question);
  
      setTimeout(() => {
        questions = {
          ...questions,
          [formattedQuestion.id]: formattedQuestion
        }
        
        users = {
          ...users,
          [authedUser]: {
            ...users[authedUser],
            questions: users[authedUser].questions.concat([formattedQuestion.id])
          }
        }
  
        res(formattedQuestion)
      }, 1000)
    })
  }
  
  export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
    return new Promise((res, rej) => {
      setTimeout(() => {
        users = {
          ...users,
          [authedUser]: {
            ...users[authedUser],
            answers: {
              ...users[authedUser].answers,
              [qid]: answer
            }
          }
        }
  
        questions = {
          ...questions,
          [qid]: {
            ...questions[qid],
            [answer]: {
              ...questions[qid][answer],
              votes: questions[qid][answer].votes.concat([authedUser])
            }
          }
        }
  
        res()
      }, 500)
    })
  }

  //gyyt




//   const users =
//   [
//      {
//          "id": "sarahedo",
//          "name": "Sarah Edo",
//          "answers": {
//              "8xf0y6ziyjabvozdd253nd": "optionOne",
//              "6ni6ok3ym7mf1p33lnez": "optionTwo",
//              "am8ehyc8byjqgar0jgpub9": "optionTwo",
//              "loxhs1bqm25b708cmbf3g": "optionTwo"
//          },
//          "questions": [
//              "8xf0y6ziyjabvozdd253nd",
//              "am8ehyc8byjqgar0jgpub9"
//          ]
//      },
//      {
//          "id": "tylermcginnis",
//          "name": "Tyler McGinnis",
//          "answers": {
//              "vthrdm985a262al8qx3do": "optionOne",
//              "xj352vofupe1dqz9emx13r": "optionTwo"
//          },
//          "questions": [
//              "loxhs1bqm25b708cmbf3g",
//              "vthrdm985a262al8qx3do"
//          ]
//      },
//      {
//          "id": "johndoe",
//          "name": "John Doe",
//          "answers": {
//              "xj352vofupe1dqz9emx13r": "optionOne",
//              "vthrdm985a262al8qx3do": "optionTwo",
//              "6ni6ok3ym7mf1p33lnez": "optionTwo"
//          },
//          "questions": [
//              "6ni6ok3ym7mf1p33lnez",
//              "xj352vofupe1dqz9emx13r"
//          ]
//      }
//  ]
//  const map2 = users.map((x) => (
//                         {id: x.id,
//                          name: x.name,
//                         addedQuestions: x.questions.length,
//                         answerd:Object.keys(x.answers).length,
//                         sum:x.questions.length + Object.keys(x.answers).length})
//   );
 
//  console.log(map2);


// let questions = [
//   {
//    id: '8xf0y6ziyjabvozdd253nd',
//    author: 'sarahedo',
//    timestamp: 1467166872634,
//    optionOne: {
//      votes: ['sarahedo'],
//      text: 'have horrible short term memory',
//    },
//    optionTwo: {
//      votes: [],
//      text: 'have horrible long term memory'
//    }
//  },
// {
//    id: '6ni6ok3ym7mf1p33lnez',
//    author: 'johndoe',
//    timestamp: 1468479767190,
//    optionOne: {
//      votes: ['sarahedo'],
//      text: 'become a superhero',
//    },
//    optionTwo: {
//      votes: ['johndoe', 'sarahedo'],
//      text: 'become a supervillain'
//    }
//  },
//  {
//    id: 'am8ehyc8byjqgar0jgpub9',
//    author: 'sarahedo',
//    timestamp: 1488579767190,
//    optionOne: {
//      votes: [],
//      text: 'be telekinetic',
//    },
//    optionTwo: {
//      votes: ['sarahedo'],
//      text: 'be telepathic'
//    }
//  },
// {
//    id: 'loxhs1bqm25b708cmbf3g',
//    author: 'tylermcginnis',
//    timestamp: 1482579767190,
//    optionOne: {
//      votes: [],
//      text: 'be a front-end developer',
//    },
//    optionTwo: {
//      votes: ['sarahedo'],
//      text: 'be a back-end developer'
//    }
//  },
// {
//    id: 'vthrdm985a262al8qx3do',
//    author: 'tylermcginnis',
//    timestamp: 1489579767190,
//    optionOne: {
//      votes: ['tylermcginnis'],
//      text: 'find $50 yourself',
//    },
//    optionTwo: {
//      votes: ['johndoe'],
//      text: 'have your best friend find $500'
//    }
//  },
// {
//    id: 'xj352vofupe1dqz9emx13r',
//    author: 'johndoe',
//    timestamp: 1493579767190,
//    optionOne: {
//      votes: ['johndoe'],
//      text: 'write JavaScript',
//    },
//    optionTwo: {
//      votes: ['tylermcginnis'],
//      text: 'write Swift'
//    }
//  },
// ]
// const result2 = questions.filter(x => x.optionOne.votes.find(element => element === 'johndoe') === 'johndoe'
//                 ||      x.optionTwo.votes.find(element => element === 'johndoe') === 'johndoe'          
//                                );
// console.log(result2);
// const result3 = questions.filter(x => x.optionOne.votes.find(element => element === 'johndoe') === undefined
//                 &&      x.optionTwo.votes.find(element => element === 'johndoe') === undefined         
//                                );
// console.log('');
// console.log(result3);

