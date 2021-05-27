import React , {useState,useEffect} from 'react'

const Statewise = () => {

    const[data,setData]=useState([])
   const getCovidData = async ()=>{
        const res = await fetch('https://api.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
   }

    useEffect(() => {
        getCovidData();
    }, [])

    return (
        <>
            <div className ="container-fluid mt-5">
                <div className ="main-heading">
                    <h2 className ="m-5 text-center"><span className = "font-weight-bold">India</span> COVID-19 Report</h2>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover table-striped">
                        <thead className="table-dark">
                            <tr>
                                <th> State </th>
                                <th> Confirmed </th>
                                <th> Active </th>
                                <th> Recovered </th>
                                <th> Deaths </th>
                                <th> Updated </th>
                            </tr>
                        </thead>
                        <tbody>
                              {
                                  data.map((currentElement,index) =>{
                                      return(
                                        <tr key={index}>
                                        <td className="table  table-success"> {currentElement.state} </td>
                                        <td className="table  table-success"> {currentElement.confirmed} </td>
                                        <td className="table  table-success"> {currentElement.active} </td>
                                        <td className="table  table-success"> {currentElement.recovered} </td>
                                        <td className="table  table-danger"> {currentElement.deaths} </td>
                                        <td className="table  table-success"> {currentElement.lastupdatedtime} </td>
                                    </tr>
                                      )
                                  })
                              }

                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default Statewise;
