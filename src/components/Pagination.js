const Pagination = ({postPerPage, totalPosts}) => {
    const pageNumbers = [];
    console.log("totalPosts/postPerPage::", totalPosts/postPerPage)
    for (let i = 0; i <= Math.ceil(totalPosts/postPerPage); i++){
        pageNumbers.push(i);
    }
    console.log(pageNumbers);
    pageNumbers.map((number) => {
        console.log(number);
         return <nav className="fullPage">
                    <ul className="pagination">
                        <li key={number}>
                         <a href="!#">{number}dsfdfs</a>
                        </li>
                    </ul>
                </nav>;
                })
    }

export default Pagination;