
const DATE_TIME_FOMATTER = new Intl.DateTimeFormat(
    "en",{
        dateStyle:'full',
        timeStyle:'medium'
    }
)

export const formatDateTime =(date:Date)=>{
    if (typeof date === 'string') {
        date = new Date(date);
    }

    return DATE_TIME_FOMATTER.format(date);
}

