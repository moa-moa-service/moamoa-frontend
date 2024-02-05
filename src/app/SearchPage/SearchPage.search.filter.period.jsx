import * as C from "./styled/SearchPage.search.filter.style"
import * as itemS from "./styled/SearchPage.search.filter.period.style"

function FilterPeriod() {
    return(
        <>
        <C.FilterContainer display="none">
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
                        <itemS.MonthText>2023년 7월</itemS.MonthText>
                        <itemS.btn>
                            <img src="../../../public/SearchPage/angle_right.png" />
                        </itemS.btn>
                    </itemS.CalendarNav>
                    <itemS.Calendar>
                        <itemS.weeks>
                            <itemS.week>월</itemS.week>
                            <itemS.week>화</itemS.week>
                            <itemS.week>수</itemS.week>
                            <itemS.week>목</itemS.week>
                            <itemS.week>금</itemS.week>
                            <itemS.week>토</itemS.week>
                            <itemS.week>일</itemS.week>
                        </itemS.weeks>
                        <itemS.days>
                            <itemS.day>
                                <itemS.dayText>1</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>2</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>3</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>4</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>5</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText color="gray">6</itemS.dayText>
                                <itemS.todayText>Today</itemS.todayText>    
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText color="red">7</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>8</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>9</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>10</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>11</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>12</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>13</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>14</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>15</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>16</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>17</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>18</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>19</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>20</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>21</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>22</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>23</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>24</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>25</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>26</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>27</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>28</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>29</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>30</itemS.dayText>
                            </itemS.day>
                            <itemS.day>
                                <itemS.dayText>31</itemS.dayText>
                            </itemS.day>
                        </itemS.days>
                    </itemS.Calendar>
                </itemS.CalendarContainer>
                <C.BtnContainer>
                    <C.Btn>취소</C.Btn>
                    <C.Btn color="navy">선택 완료</C.Btn>
                </C.BtnContainer>
            </C.FilterContent>
        </C.FilterContainer>
        </>
    )
}

export default FilterPeriod