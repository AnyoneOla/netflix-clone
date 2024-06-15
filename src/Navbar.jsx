import './Navbar.css'
import netflixLogo from './assets/logo.png'
import userLogo from './assets/user.png'

export default function Navbar(){

    return (
        <div className='navbar-main' id='navbar-main'>
            <div className='leftPart'>
                <div>
                    <img className='logo' src={netflixLogo} />
                </div>
                
                <div className='menu'>
                    Home
                </div>
                <div className='menu'>
                    TV Shows
                </div>
                <div className='menu'>
                    Movies
                </div>
                <div className='menu'>
                    New & Popular
                </div>
                <div className='menu'>
                    My List
                </div>
            </div>
            <div className='rightPart'>
                <div className='menu' style={{paddingRight:'15px'}}>
                    <img style={{height:'23px', width:'23px', cursor:'pointer'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABdUlEQVR4nO2WwUpCQRiFL5lusnYJvYL1DtneRUb5CmJYWk8RvoZZjxJEmyxISdu31kWtvvjtXJiVMjMXCfLAgOCc882d+e8/N0nW+isCCkAduAOGwEzDfvf1XyFr6AkwYbnGQC0L4AbQdYKfgUugDGxp7ANtYODMuzFvDLiroC+gsShMi2xq7hwes70o6NDDV3HgxyGFNJG5EbDoc3nfgbyPse6cqfdZATngRRmnPsZ7mS58oU5GRxm3PqaRTOUIsFW7aehjmspUjABvK2O6avBOCHiUwVYfpJXtY+rL1I4AXyujF/I6DSJep1dlnPk2kLGMzQBwS94PYNPXXJPZ2l/Fw3cEfMtb9V30XLplUri1wVyyeHtbDvQT2E1CxO+Nk8JRG+yoORQ1rHqvnDNNoen8UhDcZLeMGv4y2ZlW7UmdXh0Nz1vDt94LvKnJzLSgnlWvW0gGywzuKz15+mVii91L/gu85Gz748rADvwJeFgpeK1E+gHiePXNoZbl0QAAAABJRU5ErkJggg==" />
                </div>
                <div className='menu' style={{paddingLeft:'5px', paddingRight:'5px'}}>
                    <img style={{height:'23px', width:'23px', cursor:'pointer', marginLeft:'5px', marginRight:'5px'}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWUlEQVR4nO3Yu0oDQRiG4Sm1EzRVGk+ViKUEIhLSBrReg2BKQYiF0Vq8EsE7ELyC4OEGPFYWRuxSRSEhrwwuKBhYzO7/zyzOAwOB7IbvbRayxgRBEAQ+AhaA3fjMmzwBtoAPvtnPkckDYAV457ee/c74CJgE9oE7kt3G104YHwAV4Jm/s/dUXI/fAQaMbwA0XI2vpRz/M6KmPX4K6JCdjv1NzYBDstfSDHgQCLjXGj+NnIJGQFUwoKoRUBcMiDQCmoIBexoBJ4IBxxoBZ4IBpxoBV4IBbY2AN8GAV+nxReQVJQO2FQIiyYALhYBzqfHrwFAhYAisZT1+A+iipwtsZjW+BPTR1wdWswi4xJ122vHLuLfk+2MzST1NQAv3DtIELAJPDsc/2nesYwf8O3w9co8STsn4CigkvC96AWaMz4A54GbE+Gtg1uQFULb/ceNTdr0nCIIgMKN8AqnE4NfxCFGmAAAAAElFTkSuQmCC" />
                </div>
                <img style={{margin:'15px', height:'30px', width:'30px', cursor:'pointer', marginLeft:'15px', marginRight:'5px', borderRadius:'3px'}} src={userLogo} />
            </div>
        
        </div>
    )
}