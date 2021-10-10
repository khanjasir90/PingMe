import React from 'react'
import Cookies from 'universal-cookie';
import MessageIcon from '../assets/message-icon.png'
import LogoutIcon from '../assets/logout-icon.png'

const SideBar  = () => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={MessageIcon} alt="" width="30px"/>
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner">
                <img src={LogoutIcon} alt="" width="30px"/>
            </div>
        </div>
    </div>
)


const ChannelListContainer = () => {
    return (
        <>
            <SideBar />
        </>
    )
}

export default ChannelListContainer
