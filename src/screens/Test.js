import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { IconButton, Button } from 'react-native-paper';
import { questionBank } from '../constants/TestData';

const QuestionScreen = ({ route }) => {

  // useEffect(() => {
  //       let interval = null;
  //       if (isActive && timeLeft > 0) {
  //            interval = setInterval(() => {
  //                setTimeLeft(prevTime => prevTime - 1);
  //            }, 1000);
  //        } else if (timeLeft === 0) {
  //            clearInterval(interval);
  //            // Timer finished
  //            alert('Time is up!');
  //        }

  //        return () => clearInterval(interval);
  //    }, [isActive, timeLeft]);




  const { title } = route.params;
  const subject = questionBank[title];
  const allQuestions = subject.questions;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const currentQuestion = allQuestions[currentQuestionIndex];

  // Get the currently selected answer for this question
  const selectedOption = userAnswers[currentQuestion.id];

  const handleNext = () => {
    if (currentQuestionIndex < allQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleDotPress = (index) => {
    setCurrentQuestionIndex(index);
  };

  const handleOptionSelect = (optionKey) => {
    // Save the user's answer for this question
    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionKey
    }));
  };

  const handleSubmit = () => {
    // Calculate score
    let score = 0;
    allQuestions.forEach(question => {
      if (userAnswers[question.id] === question.answer) {
        score++;
      }
    });

    // Here you would typically navigate to a results screen
    alert(`You scored ${score}/${allQuestions.length}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../../assets/SectionImages/ArrowIcon.png')} />
        <Text style={styles.timer}>09:05</Text>
        <Button
          mode="outlined"
          style={styles.submitButton}
          onPress={handleSubmit}
        >
          Submit
        </Button>
      </View>

      {/* Progress Dots */}
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.progressScroll}>
          <View style={styles.progressRow}>
            {allQuestions.map((question, index) => {
              const isAnswered = userAnswers[question.id];
              const isCurrent = index === currentQuestionIndex;

              return (
                <TouchableOpacity
                  key={question.id}
                  onPress={() => handleDotPress(index)}
                >
                  <View
                    style={[
                      styles.progressDot,
                      isCurrent && styles.activeDot,
                      isAnswered && styles.answeredDot,
                    ]}
                  >
                    {isCurrent && (
                      <Text style={styles.dotText}>{question.id}</Text>
                    )}
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>


      {/* Question */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.questionNumber}>{currentQuestion.id}.</Text>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>

        {/* Options */}
        {Object.entries(currentQuestion.options).map(([key, value]) => {
          const isSelected = selectedOption === key;
          return (
            <TouchableOpacity
              key={key}
              style={[styles.option, isSelected && styles.selectedOption]}
              onPress={() => handleOptionSelect(key)}
            >
              <Text style={[styles.optionText, isSelected && styles.selectedText]}>
                {key}. {value}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Navigation Arrows */}
      <View style={styles.navButtons}>
        <TouchableOpacity onPress={handlePrevious}><Image source={require('../../assets/SectionImages/ArrowIcon.png')}/></TouchableOpacity>
        <Text style={styles.questionCounter}>
          {currentQuestionIndex + 1}/{allQuestions.length}
        </Text>
        <TouchableOpacity onPress={handleNext} ><Image source={require('../../assets/Test/rightArrow.png')}/></TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  timer: {
    fontSize: 16,
    fontWeight: '600',
    color: '#800080',
  },
  submitButton: {
    borderColor: '#800080',
    borderWidth: 1,
    borderRadius: 20,
  },
  progressScroll: {
    flex:1,
    justifyContent:'space-evenly',
    // paddingHorizontal: ,
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    // justifyContent:''
  },
  progressDot: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#800080',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    // justifyContent:''
  },
  activeDot: {
    backgroundColor: '#800080',
  },
  answeredDot: {
    backgroundColor: '#d8bfd8', // Light purple for answered questions
  },
  dotText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  questionNumber: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 5,
    color: '#800080',
  },
  questionText: {
    fontSize: 16,
    marginBottom: 20,
    lineHeight: 24,
  },
  option: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 6,
  },
  selectedOption: {
    backgroundColor: '#800080',
    borderColor: '#800080',
  },
  optionText: {
    fontSize: 16,
    color: '#000',
  },
  selectedText: {
    color: '#fff',
  },
  navButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 10,
  },
  questionCounter: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#800080',
  },
});

export default QuestionScreen;






































// import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import questionBank from '../constants/TestData';
// import CustomButton from '../Component/button/CustomButton';


// const height = Dimensions.get('window').height;
// const width = Dimensions.get('window').width;

// export default function Test({ route }) {
//     const { title } = route.params;
//     const subject = questionBank[title]



//     const [timeLeft, setTimeLeft] = useState(600); // 600 seconds = 10 minutes
//     const [isActive, setIsActive] = useState(false);

//     useEffect(() => {
//         let interval = null;

//         if (isActive && timeLeft > 0) {
//             interval = setInterval(() => {
//                 setTimeLeft(prevTime => prevTime - 1);
//             }, 1000);
//         } else if (timeLeft === 0) {
//             clearInterval(interval);
//             // Timer finished
//             alert('Time is up!');
//         }

//         return () => clearInterval(interval);
//     }, [isActive, timeLeft]);

//     const toggleTimer = () => {
//         setIsActive(!isActive);
//     };

//     const resetTimer = () => {
//         setIsActive(false);
//         setTimeLeft(600);
//     };

//     // Format time as MM:SS with leading zeros
//     const formatTime = () => {
//         const minutes = Math.floor(timeLeft / 60);
//         const seconds = timeLeft % 60;
//         return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//     };







//     return (
//         <View style={styles.container}>
//             <View style={styles.timerView}>
//                 <Image source={require('../../assets/SectionImages/ArrowIcon.png')} />
//                 <View style={{ flexDirection: 'row', }}>
//                     <TouchableOpacity
//                         onPress={toggleTimer}
//                     >
//                         <Image style={{ marginRight: 20 }} source={require('../../assets/Test/pause.png')} />
//                     </TouchableOpacity>
//                     <Text style={styles.timerText}>{formatTime()}</Text>

//                     {/* <View style={styles.buttonContainer}>


//                         <TouchableOpacity
//                             style={[styles.button, styles.resetButton]}
//                             onPress={resetTimer}
//                         >
//                             <Text style={styles.buttonText}>Reset</Text>
//                         </TouchableOpacity>
//                     </View> */}





//                 </View>
//                 <CustomButton
//                     title="Submit"
//                     width={91}
//                     height={32}
//                     backgroundColor="#6A1B9A"
//                     borderRadius={30}
//                     fontSize={12}
//                     fontWeight="700"
//                     textColor="#FFF" />
//             </View>




//             <View style={styles.questionContainer}>
//                 <Text style={styles.questionNumber}>{number}.</Text>
//                 <Text style={styles.questionText}>{question}</Text>
//                 {options.map((option, index) => (
//                     <Text key={index} style={styles.optionText}>
//                         {String.fromCharCode(65 + index)}. {option}
//                     </Text>
//                 ))}
//             </View>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         position: 'relative',
//         width: '100%',
//         height: '100%',
//         padding: 16
//     },
//     topView: {
//         position: 'absolute',
//         width: 446,
//         height: 177,
//         top: 145,
//         left: 2736,
//         backgroundColor: 'transparent', // Add your desired background color
//         borderWidth: 1, // Optional: for visualization
//         borderColor: '#000', // Optional: for visualization
//     },
//     bottomLine: {
//         position: 'absolute',
//         width: 448,
//         height: 3.6122448444366455,
//         top: 321.1,
//         left: 2735,
//         backgroundColor: '#E4E9F2',
//     },
//     timerText: {
//         fontSize: 17,
//         fontWeight: 'bold',
//         color: '#333',
//         fontFamily: 'monospace', // Ensures equal width for all characters
//     },
//     buttonContainer: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         width: '60%',
//     },
//     button: {
//         paddingVertical: 12,
//         paddingHorizontal: 25,
//         borderRadius: 25,
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     startButton: {
//         backgroundColor: '#4CAF50',
//     },
//     pauseButton: {
//         backgroundColor: '#FFC107',
//     },
//     resetButton: {
//         backgroundColor: '#F44336',
//     },
//     buttonText: {
//         color: 'white',
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     timerView: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         marginTop: height * 0.01
//     }
// });