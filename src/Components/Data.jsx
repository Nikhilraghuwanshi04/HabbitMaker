import React from 'react';

export default function Data({ habitList , removeFromHabitList }) {
  let list = habitList.map((item, index) => (
    <li key={index}>{item.date} :&#160;&#160;&#160;  {item.task} &#160;&#160;&#160;&#160; &#160;  {item.place}&#160;&#160;&#160; &#160; &#160;  {item.purpose}&#160; &#160; &#160; <button className='but' onClick={() => removeFromHabitList(index)}>❌</button></li>
  ));

  return (
    <div>
      <h1>-: Tasks :-</h1>
      <ul className='li'>{list}</ul>
    </div>
  );
}
