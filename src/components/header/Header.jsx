import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import {useState} from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from "date-fns";
import { useNavigate } from 'react-router-dom'; // Or the appropriate import statement


 const Header = ({type}) => {
  const [destination,setDestination] = useState("");
  const [openDate,setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      // Arrays
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    },
  ]);
  //Count of persons
  const [openOptions,setOpenOptions] = useState(false);
  const [options,setOptions] = useState({
    adult: 0,
    children: 0,
    room: 0,
  })
  const navigate = useNavigate()
  const handleOption = (name,operation) => {
    setOptions(prev=>{
      return {
      ...prev, 
      [name]: operation === "d" ? options[name] - 1 : options[name] + 1,
    }
  })
  }
  const handleSearch = ()=>{
     navigate("/hotels" , {state:{destination,date,options}})
  }
  return (
    <div className="header">
     <div className={
      type === "list" ? "headerContainer listMode" : "headerContainer"
      }
      b>
        <div className="headerList">
          <div className="headerListItem active">
            <FontAwesomeIcon icon={faBed}/>
            <span>Stays</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        { type != "list" &&
          <><h1 className="headerTitle">A lifetime of discounts?It's Genius</h1>
        <p className="headerDesc">Book Easy is one of the largest online travel platforms in India, We offer "end to end" travel solutions including air tickets, hotel booking, cab and bus booking,and holiday packages.</p>
        <button className="header-btn">Sign in / Register</button>
        <div className="headerSearch">

          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faBed} className="headerIcon"/>
          <input type="text" placeholder="Where are you going?" className="headerSearchInput"
          onChange={e=>setDestination(e.target.value)}
          />
          </div>

          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
          {/* <span className="headerSearchText">date to date</span> */}

          <span  onClick={() => setOpenDate(!openDate)}
          className="headerSearchText">
          {`${format(date[0].startDate,"MM/dd/yyyy")} 
          to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
          { openDate && ( 
            <DateRange
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
          />)}

          </div>
          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
          <span  onClick={() => setOpenOptions(!openOptions)}
          className="headerSearchText">{`${options.adult}adult . ${options.children}children . ${options.room}room`}</span>
          {openOptions && (<div className="options">
            {/* For Adult */}
            <div className="optionItem">
              <span className="optionText">Adult </span>
              <div className="optionCounter">
              <button 
                 disabled={options.adult <=1}
                 className="optionCounterButton" 
                 onClick={()=>handleOption("adult","d")}>
                 -</button>
              <span className="optionCounterNumber">{options.adult}</span>
              <button className="optionCounterButton" 
              onClick={()=>handleOption("adult","i")}>
              +</button>
              </div>
            </div>
            
            {/* For Children */}
            <div className="optionItem">
              <span className="optionText">Children</span>
              <div className="optionCounter">
              <button className="optionCounterButton" 
               disabled={options.children <=1}
              onClick={()=>handleOption("children","d")}>
              -</button>
              <span className="optionCounterNumber">{options.children}</span>
              <button className="optionCounterButton" 
              onClick={()=>handleOption("children","i")}>
              +</button>
              </div>
            </div>
            <div className="optionItem">
              <span className="optionText">Room</span>
              <div className="optionCounter">
              <button className="optionCounterButton" 
               disabled={options.room <=1}
              onClick={()=>handleOption("room","d")}>-</button>
              <span className="optionCounterNumber">{options.room}</span>
              <button className="optionCounterButton" onClick={()=>handleOption("room","i")}>+</button>
              </div>
            </div>
          </div>)}
          </div>
          <div className="headerSearchItem">
            <button className="headerBtn" onClick={handleSearch}>Search</button>
          </div>
        </div>
        </>}
      </div> 
      </div>
  )
}

export default Header