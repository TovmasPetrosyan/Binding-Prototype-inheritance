let Pagination = {
    init: function (arr, pageSize){
        this.arr = arr;
        this.pageSize = pageSize;
        this.currentPage = 1;
        return this;
    },
    prevPage: function (){
     let prevPage = this.currentPage - 1;
     return prevPage > 0 ? prevPage: null
    },
    nextPage: function (){
     let nextPage = this.currentPage + 1;
     return nextPage <= Math.ceil(this.arr.length/ this.pageSize) ? nextPage: null
    },
    firstPage: function(){
     return 1;
    },
    lastPage: function(){
     return Math.ceil(this.arr.length/this.pageSize);
    },
    goToPage: function(number){
    this.currentPage = number
    },
    getPageItems() {
     const startIndex = (this.currentPage - 1) * this.pageSize;
     const endIndex = startIndex + this.pageSize;
     return this.arr.slice(startIndex, endIndex);
   }
 }
 