import styled from "styled-components";

export const TextInputContainer = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  padding: 0 0 10px 0;
  justify-content: center;
  border-bottom: 2px var(--purple) solid;

  input {
    border: 0px;
    width: 100%;
    background: none;
    color: var(--white);
    text-align: center;
    box-sizing: content-box;
  }

  input:focus{
    outline: none;
  }
`