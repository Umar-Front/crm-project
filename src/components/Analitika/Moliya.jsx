import { useState } from "react";
import useDate, { weeks } from "../../hooks/date";
import Subtitle from "../Generics/Subtitle";
import { ArrowIcon, DateCard, Fragment, Section, Wrapper } from "./moliyaStyle"



const Moliya = () => {
  const date = useDate();
  const [active, setActive] = useState(new Date().getDate())
  const [weekCount, changeWeek] = useState(0)

  const onClickDate = (value) => {
    if (date.week(weekCount)[0].getDate() === value.getDate())
      changeWeek(weekCount - 1);
    else if (date.week(weekCount)[6]?.getDate() === value?.getDate())
      changeWeek(weekCount + 1);
    // console.log(date.week());
    setActive(value?.getDate());
  };

  const onclickForward = () => { changeWeek(weekCount + 6) }
  const onclickBackward = () => { changeWeek(weekCount - 6) }


  return (
    <Wrapper>
      <Fragment>
        <ArrowIcon left onClick={onclickBackward} />
        <div>
          {date.month.full} {date.year}
        </div>
        <ArrowIcon onClick={onclickForward} />
      </Fragment>
      <Fragment mt={16} mb={16}>

        {date.week(weekCount).map((val) => {
          const ac = active === val.getDate()
          return (
            <DateCard
              active={ac}
              key={val}
              onClick={() => onClickDate(val)}>

              <Subtitle color={ac && "white"} size={14}>{weeks[val.getDay()]?.short}</Subtitle>
              <Subtitle color={ac && "white"} size={14}>{val.getDate()}</Subtitle>
            </DateCard>
          )
        })}

      </Fragment>
      <Subtitle color='#929FAF' size={14}>{date.date}-{date.month.full}, {date.year}</Subtitle>
      <Subtitle size={32} mt={5} mb={24}>8 520 000 <Subtitle size={24} color='#52C41A' ml={16}>+22%</Subtitle> </Subtitle>

      <Fragment mb={8}>
        <div>Talabalar</div>
        <Subtitle>5 760 000</Subtitle>
      </Fragment>
      <Fragment>
        <div>Darsliklar sotuvi</div>
        <Subtitle>2 180 000</Subtitle>
      </Fragment>
    </Wrapper >
  )
}

export default Moliya