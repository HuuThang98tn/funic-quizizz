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
import {
    ListDataLesson01,
    ListDataLesson02,
    ListDataLesson03,
    ListDataLesson04,
    ListDataLesson05,
    ListDataLesson06,
    ListDataLesson07,
    ListDataLesson08,
    ListDataLesson09,
    ListDataLesson10,
    ListDataLesson11,
    ListDataLesson12,
    ListDataLesson13,
    ListDataLesson14,
    ListDataLesson15,
    ListDataLesson16,
    ListDataLesson17,
    ListDataLesson18,
    ListDataLesson19,
    ListDataLesson20,
    ListDataLesson21,
    ListDataLesson22,
    ListDataLesson23,
    ListDataLesson24,
    ListDataLesson25,
    ListDataLesson26,
    ListDataLesson27,
    ListDataLesson28,
    ListDataLesson29,
    ListDataLesson30
} from '@data/lesson/ListDataLesson';
import { useSelector } from 'react-redux';
import colors from '@theme/colors/colors';
import ShowModalTimer from './ShowModalTimer';
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
    const isSound: any = useSelector((state: any) => state.soundReducer);
    const [counter, setCounter] = useState<any>(25 * 60);
    const [currentNumber, setCurrentNumber] = useState<number>(idQuestion.id);
    const [allQuestions, setAllQuestions] = useState<any>([])
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
    const [correctOption, setCorrectOption] = useState(null);
    const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
    const [score, setScore] = useState(0);
    const [showNextButton, setShowNextButton] = useState(false);
    const [showScoreModal, setShowScoreModal] = useState(false);
    const [progress] = useState(new Animated.Value(0));
    const [checkNumberQuestion, setCheckNumberQuestion] = useState<boolean | null>(true);
    const [showScoreModalTimer, setShowScoreModalTimer] = useState<boolean>(false);
    const scrollViewRef = useRef<any>(null);

    useEffect(() => {
        switch (currentNumber) {
            case 0:
                break;
            case 1:
                setAllQuestions(ListDataLesson01)
                break;
            case 2:
                setAllQuestions(ListDataLesson02)
                break;
            case 3:
                setAllQuestions(ListDataLesson03)
                break;
            case 4:
                setAllQuestions(ListDataLesson04)
                break;
            case 5:
                setAllQuestions(ListDataLesson05)
                break;
            case 6:
                setAllQuestions(ListDataLesson06)
                break;
            case 7:
                setAllQuestions(ListDataLesson07)
                break;
            case 8:
                setAllQuestions(ListDataLesson08)
                break;
            case 9:
                setAllQuestions(ListDataLesson09)
                break;
            case 10:
                setAllQuestions(ListDataLesson10)
                break;
            case 11:
                setAllQuestions(ListDataLesson11)
                break;
            case 12:
                setAllQuestions(ListDataLesson12)
                break;
            case 13:
                setAllQuestions(ListDataLesson13)
                break;
            case 14:
                setAllQuestions(ListDataLesson14)
                break;
            case 15:
                setAllQuestions(ListDataLesson15)
                break;
            case 16:
                setAllQuestions(ListDataLesson16)
                break;
            case 17:
                setAllQuestions(ListDataLesson17)
                break;
            case 18:
                setAllQuestions(ListDataLesson18)
                break;
            case 19:
                setAllQuestions(ListDataLesson19)
                break;
            case 20:
                setAllQuestions(ListDataLesson20)
                break;
            case 21:
                setAllQuestions(ListDataLesson21)
                break;
            case 22:
                setAllQuestions(ListDataLesson22)
                break;
            case 23:
                setAllQuestions(ListDataLesson23)
                break;
            case 24:
                setAllQuestions(ListDataLesson24)
                break;
            case 25:
                setAllQuestions(ListDataLesson25)
                break;
            case 26:
                setAllQuestions(ListDataLesson26)
                break;
            case 27:
                setAllQuestions(ListDataLesson27)
                break;
            case 28:
                setAllQuestions(ListDataLesson28)
                break;
            case 29:
                setAllQuestions(ListDataLesson29)
                break;
            case 30:
                setAllQuestions(ListDataLesson30)
                break;

            default:
                break;
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
        console.log("0000000000000000000000000");
        scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });

        soundMp3.play(({ success, err }: any) => {
            if (!success) {
                console.log('Failed to play the sound', err);
            }
        });
        if (currentQuestionIndex == allQuestions.length - 1) {
            // Last Question
            // Show Score Modal
            setShowScoreModal(true);
            if (currentNumber >= 30) {
                setCheckNumberQuestion(true)
            } else {
                setCheckNumberQuestion(true)
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
        // soundMp3.release()
    };
    const restartQuiz = () => {
        setCounter(25 * 60)
        setShowScoreModalTimer(false)
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
    };
    useEffect(() => {
        if (counter === 0) {
            setShowScoreModalTimer(true)
        }
        const timer: any = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

        return () => clearInterval(timer);
    }, [counter]);

    const formatTime = (time: any) => {
        const minutes = Math.floor(time / 60)
            .toString()
            .padStart(2, '0');
        const seconds = (time % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
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
    };
    const nextQuiz = () => {
        setCurrentNumber(currentNumber + 1)

        if (currentNumber >= 30) {
            props.navigation.navigate("HomeScreen" as never);
        } else {
            setCounter(25 * 60)
            setShowScoreModalTimer(false)
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

    }

    return (
        <View
            style={{
                flex: 1,
                paddingHorizontal: 10,
            }}>
            {/* Introduction */}

            <ScrollView
                ref={scrollViewRef}
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        flex: 3,
                        marginTop: STATUS_BAR_HEIGHT + 16,
                        width: '100%',
                        // backgroundColor: 'red'
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
                <View style={{
                    paddingTop: 52,
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 20
                }}>
                    <Text style={{
                        color: colors.colors_orange,
                        fontSize: 22,
                        fontWeight: "700"
                    }}>Time : </Text>
                    <Text style={{
                        color: colors.colors_orange,
                        fontSize: 22,
                        fontWeight: "700"
                    }}>
                        {formatTime(counter)}
                    </Text>
                </View>
                <View style={{ flex: 12, paddingBottom: 120, }}>
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
                        showScoreModal={showScoreModal}//showScoreModal
                        score={score}
                        allQuestions={allQuestions}
                        restartQuiz={restartQuiz}
                        nextQuiz={nextQuiz}
                        checkNumberQuestion={checkNumberQuestion}
                    />
                    <ShowModalTimer
                        showScoreModalTimer={showScoreModalTimer}
                        restartQuizTimer={restartQuiz}
                        nextQuizTimer={nextQuiz}
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
