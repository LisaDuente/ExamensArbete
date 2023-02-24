import OverView from '../components/overview'

export default function ViewTables(){
    return <OverView 
        buttonName={'Table'} 
        goBack={true} 
        tableData={[{name: 'table1'}, {name: 'table2'}]} 
        getDataHandler={()=>{}}
        createDataHandler={()=>{console.log("HALLOY")}}
    />
}