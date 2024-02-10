import * as C from "./styled/SearchPage.search.filter.style"
import * as itemS from "./styled/SearchPage.search.filter.period.style"
import { useState } from "react"
import { format, addDays, endOfMonth, endOfWeek, startOfMonth, startOfWeek, isSameMonth, isSameDay } from "date-fns" 

function FilterPeriod({openPeriodFilter}) {

    const currentDate = new Date() ;   // 현재 날짜

    const startDate = startOfMonth(currentDate) ;   // 현재 월의 시작일
    const endDate = endOfMonth(currentDate) ;       // 현재 월의 마지막일

    const startWeek = startOfWeek(startDate) ;      // 현재 월의 첫 주
    const endWeek = endOfWeek(endDate) ;            // 현재 월의 마지막 주

    // 달력에 표시할 날짜 배열 생성
    const rows = [] ;
    let days = [] ;
    let day = startWeek ;

    while(day <= endWeek) {
        for(let i=0; i<7; i++) {

            const color = isSameMonth(day, currentDate) ? null : 'gray' ;
            const checkday = isSameDay(day, Date()) ? 'today' : null ;

            days.push(
                <itemS.day key={day}>
                    <itemS.dayText color={color} checkday={checkday}>{format(day,'d')}</itemS.dayText>
                    {checkday === 'today' && <itemS.todayText>Today</itemS.todayText> } 
                </itemS.day>
            ) ;
            day = addDays(day, 1) ;
        }
        rows.push(
            <itemS.days key={day}>
                {days}
            </itemS.days>
        ) ;
        days = [] ;
    }

    return(
        <>
        <C.FilterContainer>
             <C.FilterContent>
                <C.FilterTitle>
                    <div>모집 기간</div>
                    <div>1일</div>
                </C.FilterTitle>
                <itemS.CalendarContainer>
                    <itemS.CalendarNav>
                        <itemS.btn>
                            <img src="../../../public/SearchPage/angle_left.png" />
                        </itemS.btn>
                        <itemS.MonthText>{format(currentDate, "yyyy년 M월")}</itemS.MonthText>
                        <itemS.btn>
                            <img src="../../../public/SearchPage/angle_right.png" />
                        </itemS.btn>
                    </itemS.CalendarNav>
                    <itemS.Calendar>
                        <itemS.weeks>
                            <itemS.week>일</itemS.week>
                            <itemS.week>월</itemS.week>
                            <itemS.week>화</itemS.week>
                            <itemS.week>수</itemS.week>
                            <itemS.week>목</itemS.week>
                            <itemS.week>금</itemS.week>
                            <itemS.week>토</itemS.week>
                        </itemS.weeks>
                        {rows}
                    </itemS.Calendar>
                </itemS.CalendarContainer>
                <C.BtnContainer>
                    <C.Btn onClick={openPeriodFilter}>취소</C.Btn>
                    <C.Btn color="navy" onClick={openPeriodFilter}>선택 완료</C.Btn>
                </C.BtnContainer>
            </C.FilterContent>
        </C.FilterContainer>
        </>
    )
}

export default FilterPeriod