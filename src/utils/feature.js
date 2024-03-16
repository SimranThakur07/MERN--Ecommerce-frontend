import toast from "react-hot-toast"
import moment from "moment"

export const responseToast = (res, navigate, url) => {

    if("data" in res){
        toast.success(res.data.message)
        if(navigate) navigate(url)
    }
else{
    const error = res.error
    const messageResponse = error.data
    toast.error(messageResponse.message)
}
}


export const getLastMonth = () => {

    const currentDate = moment()

    currentDate.date(1)

    const last6Month = []
    const last12Month = []

    for (let i = 0; i < 6; i++) {
        const monthDate = currentDate.clone().subtract(i, "months")
        const monthName = monthDate.format("MMMM")

        last6Month.unshift(monthName)
        
    }
    for (let i = 0; i < 12; i++) {
        const monthDate = currentDate.clone().subtract(i, "months")
        const monthName = monthDate.format("MMMM")

        last12Month.unshift(monthName)
        
    }
    return {last6Month, last12Month}
}

export const truncate = (sentence, length) => {
    const words = sentence.split(" ");
    if (words.length > length) {
      return words.slice(0, length).join(" ") + `....`;
    } else {
      return sentence;
    }
  };

 export function formatDate(isoDateString) {
    const date = new Date(isoDateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }