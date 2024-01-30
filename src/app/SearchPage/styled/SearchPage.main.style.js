import styled from "styled-components";

export const KeywordTitle = styled.div`
    margin: 25px 0 20px 0;
    font-size: 18px;
    font-weight: 600;
    color: #000000;
    display: flex;
    justify-content: space-between;
`

export const TopKeywordContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow-x: auto;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const TopKeyword = styled.div`
    width: auto;
    height: 15px;
    margin-right: 10px;
    padding: 7px 18px;
    border-radius: 20px;
    border: 1px solid #2B4760;
    color: #2B4760;
`

export const deleteText = styled.div`
    color: #888888;
    font-size: 12px;
`

export const RecentKeywordContainer = styled.li`
    display: flex;
    justify-content: space-between;
    margin: 5px 10px;
    border-bottom: 0.8px solid #E4E4E4;
    padding: 3px 7px 13px 7px;
`

export const RecentKeyword = styled.div`
    color: #2B4760;
    font-size: 15px;
`

export const RecentKeywordDelete = styled.div`
    width: 15px;
    height: 15px;
    color: #D2D2D2;
`