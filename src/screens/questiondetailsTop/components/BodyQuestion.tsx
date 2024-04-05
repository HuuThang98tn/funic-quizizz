import { View, Animated, Text, Platform, ScrollView } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { data_1, data_2 } from '@data/QuizData';
import RenderProgressBar from './RenderProgressBar';
import RenderQuestion from './RenderQuestion';
import RenderOptions from './RenderOptions';
import RenderNextButton from './RenderNextButton';
import ShowModalResult from './ShowModalResult';
import Sound from 'react-native-sound';
import { styles } from '../styleqs';
import { SCREEN_WIDTHSCREEN, STATUS_BAR_HEIGHT } from '@theme/size/sizeScree';
import FooterAppHeader from '@components/footer/FooterAppHeader';
import { ListQuestionA, ListQuestionB, ListQuestionC, ListQuestionD, ListQuestionE, ListQuestionF, ListQuestionG, ListQuestionH, ListQuestionI, ListQuestionJ, ListQuestionK, ListQuestionL, ListQuestionM, ListQuestionN, ListQuestionO } from '@data/alphabet/ListDataAlphabet';
import { ListDataVocabularyA, ListDataVocabularyB, ListDataVocabularyC, ListDataVocabularyD, ListDataVocabularyE, ListDataVocabularyF, ListDataVocabularyG } from '@data/vocabulary/ListDataVocabulary';
import { ListDataGrammarA, ListDataGrammarB, ListDataGrammarC, ListDataGrammarD, ListDataGrammarE, ListDataGrammarF, ListDataGrammarG } from '@data/grammar/ListDataGrammar';
import { useSelector } from 'react-redux';
// import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

type Props = {
    navigation?: any
    idQuestion?: number | any
};
const soundMp3: any = new Sound(
    require('../../../theme/sound/soundButtonClick.mp3'),
    Sound.MAIN_BUNDLE,
    err => {
        if (err) {
            console.log('failed to load the sound', err);
            return;
        }
    },
);

const soundMp3Success: any = new Sound(
    require('../../../theme/sound/soundExactly.mp3'),
    Sound.MAIN_BUNDLE,
    err => {
        if (err) {
            console.log('failed to load the sound', err);
            return;
        }
    },
);

const soundMp3Err: any = new Sound(
    require('../../../theme/sound/soundError.mp3'),
    Sound.MAIN_BUNDLE,
    err => {
        if (err) {
            console.log('failed to load the sound', err);
            return;
        }
    },
);
const BodyQuestion = (props: Props) => {
    const { idQuestion } = props;
    const [currentNumber, setCurrentNumber] = useState<number>(idQuestion.id);
    const [allQuestions, setAllQuestions] = useState<any>([])
    const [numberScreens] = useState<number>(idQuestion.screenshot);
    const isSound: any = useSelector((state: any) => state.soundReducer);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0);
    const [showNextButton, setShowNextButton] = useState(false);
    const [showScoreModal, setShowScoreModal] = useState(false);
    const [progress] = useState(new Animated.Value(0));
    const [checkNumberQuestion, setCheckNumberQuestion] = useState<boolean | null>(true);
    const scrollViewRef = useRef<any>(null);
    useEffect(() => {
        if (numberScreens === 1) {
            switch (currentNumber) {
                case 0:
                    setAllQuestions([])
                    break;
                case 1:
                    setAllQuestions(ListQuestionA)
                    break;
                case 2:
                    setAllQuestions(ListQuestionB)
                    break;
                case 3:
                    setAllQuestions(ListQuestionC)
                    break;
                case 4:
                    setAllQuestions(ListQuestionD)
                    break;
                case 5:
                    setAllQuestions(ListQuestionE)
                    break;
                case 6:
                    setAllQuestions(ListQuestionF)
                    break;
                case 7:
                    setAllQuestions(ListQuestionG)
                    break;
                case 8:
                    setAllQuestions(ListQuestionH)
                    break;
                case 9:
                    setAllQuestions(ListQuestionI)
                    break;
                case 10:
                    setAllQuestions(ListQuestionJ)
                    break;
                case 11:
                    setAllQuestions(ListQuestionK)
                    break;
                case 12:
                    setAllQuestions(ListQuestionL)
                    break;
                case 13:
                    setAllQuestions(ListQuestionM)
                    break;
                case 14:
                    setAllQuestions(ListQuestionN)
                    break;
                case 15:
                    setAllQuestions(ListQuestionO)
                    break;
                default:
                    break;
            }
        } else if (numberScreens === 2) {
            switch (currentNumber) {
                case 0:
                    setAllQuestions([])
                    break;
                case 1:
                    setAllQuestions(ListDataVocabularyA)
                    break;
                case 2:
                    setAllQuestions(ListDataVocabularyB)
                    break;
                case 3:
                    setAllQuestions(ListDataVocabularyC)
                    break;
                case 4:
                    setAllQuestions(ListDataVocabularyD)
                    break;
                case 5:
                    setAllQuestions(ListDataVocabularyE)
                    break;
                case 6:
                    setAllQuestions(ListDataVocabularyF)
                    break;
                case 7:
                    setAllQuestions(ListDataVocabularyG)
                    break;
                default:
                    break;
            }
        } else if (numberScreens === 3) {
            switch (currentNumber) {
                case 0:
                    setAllQuestions([])
                    break;
                case 1:
                    setAllQuestions(ListDataGrammarA)
                    break;
                case 2:
                    setAllQuestions(ListDataGrammarB)
                    break;
                case 3:
                    setAllQuestions(ListDataGrammarC)
                    break;
                case 4:
                    setAllQuestions(ListDataGrammarD)
                    break;
                case 5:
                    setAllQuestions(ListDataGrammarE)
                    break;
                case 6:
                    setAllQuestions(ListDataGrammarF)
                    break;
                case 7:
                    setAllQuestions(ListDataGrammarG)
                    break;
                default:
                    break;
            }
        }

        // soundMp3Err.release();
        // soundMp3Success.release();
        // soundMp3.release();

    }, [currentNumber])


    // const adUnitId = __DEV__ ? TestIds.BANNER : Platform.OS === "android"
    //     ? "ca-app-pub-4654653142461000/7616413717" : "ca-app-pub-4654653142461000/2943026751";
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions?.length],
        outputRange: ['0%', '100%'],
    });
    const onPressGoBack = () => {
        props.navigation.goBack();
    }
    const onPressGoHome = () => props.navigation.navigate("HomeScreen" as never);
    const handleNext = () => {
        scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });

        if (isSound.isSound) {
            // soundMp3.play();
            soundMp3.play(({ success, err }: any) => {
                if (!success) {
                    console.log('Failed to play the sound', err);
                }
            });
        }
        if (currentQuestionIndex == allQuestions.length - 1) {
            // Last Question
            // Show Score Modal
            setShowScoreModal(true);
            if (numberScreens === 1) {
                if (currentNumber >= 15) {
                    setCheckNumberQuestion(true)
                    // props.navigation.navigate("HomeScreen" as never);

                } else {
                    setCheckNumberQuestion(true)
                }
            } else if (numberScreens === 2 || numberScreens === 3) {
                if (currentNumber >= 7) {
                    setCheckNumberQuestion(true)
                    // props.navigation.navigate("HomeScreen" as never);

                } else {
                    setCheckNumberQuestion(true)
                }
            }

        } else {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex + 1,
            duration: 1000,
            useNativeDriver: false,
        }).start();

        // return soundMp3.release();
    };
    const restartQuiz = () => {
        setCurrentNumber(currentNumber)
        setShowScoreModal(false);
        setCurrentQuestionIndex(0);
        setScore(0);
        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
        }).start();
        // props.navigation.navigate("GrammarScreen" as never);

    };
    const validateAnswer = async (selectedOption: any) => {
        let correct_option: any = allQuestions[currentQuestionIndex].correct_option;
        setCurrentOptionSelected(selectedOption);
        setCorrectOption(correct_option);
        setIsOptionsDisabled(true);
        if (selectedOption === correct_option) {
            // Set Score
            setScore(score + 1);
            if (isSound.isSound) {
                await soundMp3Success.play(({ success, err }: any) => {
                    if (!success) {
                        console.log('Failed to play the sound', err);
                        setShowNextButton(true);

                    } else {
                        console.log(err);
                        setShowNextButton(true);
                    }
                });
            } else {
                setShowNextButton(true);
            }
        } else {
            if (isSound.isSound) {
                // soundMp3Err.play();
                await soundMp3Err.play(({ success, err }: any) => {
                    if (!success) {
                        console.log('Failed to play the sound', err);
                        setShowNextButton(true);

                    } else {
                        console.log(success);
                        setShowNextButton(true);


                    }
                });
            } else {
                setShowNextButton(true);
            }
        }
        // Show Next Button


        // soundMp3Err.reset();
        // soundMp3Success.reset();
        // soundMp3.reset();

    };
    const nextQuiz = () => {
        setCurrentNumber(currentNumber + 1)
        if (numberScreens === 1) {
            if (currentNumber >= 15) {
                props.navigation.navigate("HomeScreen" as never);

            } else {
                setShowScoreModal(false);
                setCurrentQuestionIndex(0);
                setScore(0);

                setCurrentOptionSelected(null);
                setCorrectOption(null);
                setIsOptionsDisabled(false);
                setShowNextButton(false);
                Animated.timing(progress, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: false,
                }).start();
            }
        } else if (numberScreens === 2 || numberScreens === 3) {
            if (currentNumber >= 7) {
                props.navigation.navigate("HomeScreen" as never);

            } else {
                setShowScoreModal(false);
                setCurrentQuestionIndex(0);
                setScore(0);

                setCurrentOptionSelected(null);
                setCorrectOption(null);
                setIsOptionsDisabled(false);
                setShowNextButton(false);
                Animated.timing(progress, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: false,
                }).start(); (true)
            }
        }



    }

    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal: 10,
            }}>
            {/* Introduction */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                ref={scrollViewRef}

            >
                <View
                    style={{
                        flex: 3,
                        marginTop: STATUS_BAR_HEIGHT + 16,
                        width: '100%',

                    }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ width: "40%", }}>

                        </View>
                        <View style={{ width: "60%" }}>
                            <Text style={styles.titleText} numberOfLines={4}>
                                {allQuestions?.[currentQuestionIndex]?.introduction}
                            </Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 12, paddingBottom: 120, paddingTop: 52 }}>
                    <RenderProgressBar
                        progressAnim={progressAnim}
                        currentQuestionIndex={currentQuestionIndex}
                        allQuestions={allQuestions}
                        currentNumber={currentNumber}
                    />
                    {/* Question */}
                    <RenderQuestion question={allQuestions?.[currentQuestionIndex]?.question} />
                    {/* Options */}
                    <RenderOptions
                        options={allQuestions?.[currentQuestionIndex]?.options}
                        validateAnswer={(option: any) => validateAnswer(option)}
                        isOptionsDisabled={isOptionsDisabled}
                        correctOption={correctOption}
                        currentOptionSelected={currentOptionSelected}
                    />

                    {/* Score Modal */}
                    <ShowModalResult
                        showScoreModal={showScoreModal} //showScoreModal
                        score={score}
                        allQuestions={allQuestions}
                        restartQuiz={restartQuiz}
                        nextQuiz={nextQuiz}
                        checkNumberQuestion={checkNumberQuestion}
                    />
                </View>
            </ScrollView>
            {/* ProgressBar */}
            <View style={{
                width: "100%",
                height: 52,
                position: 'absolute',
                bottom: 60,
                left: 0,
                right: 0
            }}>
                {/* <BannerAd
                    unitId={adUnitId}
                    size={BannerAdSize.FULL_BANNER}
                    requestOptions={{
                        requestNonPersonalizedAdsOnly: true,
                    }}
                /> */}
            </View>
            <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                <FooterAppHeader
                    isVisible={showNextButton}
                    onPressNext={handleNext}
                    onPressGoBack={onPressGoBack}
                    onPressGoHome={onPressGoHome}

                />
            </View>
        </View>
    );
};

export default BodyQuestion;
