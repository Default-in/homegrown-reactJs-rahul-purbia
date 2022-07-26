import React, { useState, useEffect } from 'react'

const validateAndParseTime = (timeString) => {
    // const timeValidationRegEx = /^-?([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
    const timeValidationRegEx = /^-?(\d{2}):(\d{2}):(\d{2})$/;
    if (timeValidationRegEx.test(timeString)) {
        const timeArray = timeString.split(":")
            .map(Math.abs);
        const time = {
            hours: timeArray[0] || 0,
            minutes: timeArray[1] || 0,
            seconds: timeArray[2] || 0
        };
        const timeInMilliSeconds = (((time.hours * 60 * 60) + (time.minutes * 60) + time.seconds) * 1000);

        return timeString.startsWith("-")
            ? -timeInMilliSeconds
            : timeInMilliSeconds;
    }
    else {
        throw new Error("Invalid time format")
    }
}

const useClock = (alteredTimeDuration = "") => {
    const [time, setTime] = useState(() => {
        const date = new Date();
        const totalMilliSecondsDifference = alteredTimeDuration
            ? validateAndParseTime(alteredTimeDuration)
            : 0;
        const newdate = new Date(date.getTime() + totalMilliSecondsDifference);

        return {
            hours: newdate.getHours(),
            minutes: newdate.getMinutes(),
            seconds: newdate.getSeconds(),
        }
    })

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime((prev) => ({ ...prev, seconds: prev.seconds + 1 }))
        }, 1000);

        return () => clearInterval(intervalId)
    }, [])

    useEffect(() => {
        if (time.seconds === 60) {
            setTime((prev) => ({ ...prev, minutes: prev.minutes + 1, seconds: 0 }))
        }
    }, [time.seconds])

    useEffect(() => {
        if (time.minutes === 60) {
            setTime((prev) => ({ ...prev, hours: prev.hours + 1, minutes: 0 }))
        }
    }, [time.minutes])

    return time;
}

export default useClock