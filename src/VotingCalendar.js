import React from 'react'
import './VotingCalendar.css';
const VotingCalendar = () => {
  return (
    <div>
        <center><iframe className="calendar" src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%233F51B5&ctz=Asia%2FKolkata&showTabs=1&showNav=1&showTz=0&showPrint=1&mode=MONTH&src=NzRkZTgwN2Y3N2I1OWZmMmEyZGQ0NmU3MDIxZTk0ZDU4YWMxOTM2MWZhZjdkNTkyNDhjM2Q0ODdiOGZiNDE0OEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23C0CA33" width="800" height="400" frameborder="0" scrolling="no"></iframe></center>
    </div>
  )
}

export default VotingCalendar