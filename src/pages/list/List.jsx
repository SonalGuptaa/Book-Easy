
import React from 'react'
import Navbar from '../../components/navabr/Navbar'
import Header from '../../components/header/Header'
import './list.css'
import {useLocation} from "react-router-dom"
import { useState } from 'react'
import {format} from "date-fns";
import { DateRange } from 'react-date-range'
import Searchitem from '../../components/searchItem/Searchitem'
// import { DateRange } from 'react-date-range'

const List = () => {
  const location = useLocation();
  const [destination,setDestination] = useState(location.state.destination)
  const [date,setDate] = useState(location.state.date)
  const [OpenDate, setOpenDate] = useState(false);

  const [options,setOptions] = useState(location.state.options)
  // console.log(location)
  return (
    <div>
      <Navbar/>
      <Header type="list" />
      <div className='listContainer'>
        <div className='listWrapper'>
          <div className='listSearch'>
             <h1 className='listTitle'>Search</h1>
             <div className='listItem'>
                 <label>Destination</label>
                 <input placeholder={destination}  type='text' />
             </div>
             <div className='listItem'>
                 <label>Check-in Date</label>
                 <span onClick={()=>setOpenDate(!OpenDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate ,
                 "MM/dd/yyyy")}` } </span>
                 {OpenDate && <DateRange
                  onChange={item=>setDate([item.selection])} minDate={new Date()}
                  ranges={date}
                 />}
             </div>
             {/* //list Item */}
             <div className="lsItem">
              <label>Options</label>
              {/* <h1>Options</h1> */}
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input type="number" className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button>Search</button>
          </div>
          <div className='listResult'>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
            <Searchitem/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default List
