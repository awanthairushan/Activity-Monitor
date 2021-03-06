import "./historytable.css";
import MaterialTable from "material-table";
import LanguageIcon from '@mui/icons-material/Language';


export default function HistoryTable() {


    const data = [
        {favicon:<LanguageIcon/>, site:'google.com', category:'Eduactional', visit:10, last_visited: 'two hours ago'},
        {favicon:<LanguageIcon/>, site:'google.com', category:'Eduactional', visit:10, last_visited: 'two hours ago'},
        {favicon:<LanguageIcon/>, site:'google.com', category:'Eduactional', visit:10, last_visited: 'two hours ago'},
        {favicon:<LanguageIcon/>, site:'google.com', category:'Eduactional', visit:10, last_visited: 'two hours ago'},
        {favicon:<LanguageIcon/>, site:'google.com', category:'Eduactional', visit:10, last_visited: 'two hours ago'},
        {favicon:<LanguageIcon/>, site:'google.com', category:'Eduactional', visit:10, last_visited: 'two hours ago'},
        {favicon:<LanguageIcon/>, site:'google.com', category:'Eduactional', visit:10, last_visited: 'two hours ago'},
        {favicon:<LanguageIcon/>, site:'google.com', category:'Eduactional', visit:10, last_visited: 'two hours ago'},
        {favicon:<LanguageIcon/>, site:'google.com', category:'Eduactional', visit:10, last_visited: 'two hours ago'},
        {favicon:<LanguageIcon/>, site:'google.com', category:'Eduactional', visit:10, last_visited: 'two hours ago'},
        {favicon:<LanguageIcon/>, site:'google.com', category:'Eduactional', visit:10, last_visited: 'two hours ago'},
        {favicon:<LanguageIcon/>, site:'google.com', category:'Eduactional', visit:10, last_visited: 'two hours ago'}


    ]
    const columns = [
        {title: '', field:'favicon'},
        {title: 'Web site', field:'site'},
        {title: 'Category', field: 'category'},
        {title: 'No of visit', field: 'visit'},
        {title: 'Lasti visited', field: 'last_visited'}
    ]
    return (
        <div>
            <MaterialTable 
                title = 'History'
                data = {data}
                columns = {columns}
                style={{
                    backgroundColor:'#181818',
                    color:'#fff',
                    border: '0', 
                    maxHeight: '90vh',
                    overflowY: 'scroll',                  
                }}
                options= {{
                    paging : false,
                    exportButton : true,
                    selection : false
                }
                }
            />
        </div>
    )
}
