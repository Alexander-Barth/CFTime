var documenterSearchIndex = {"docs":
[{"location":"#CFTime.jl","page":"CFTime.jl","title":"CFTime.jl","text":"","category":"section"},{"location":"","page":"CFTime.jl","title":"CFTime.jl","text":"This package implements the calendar types from the CF convention, namely:","category":"page"},{"location":"","page":"CFTime.jl","title":"CFTime.jl","text":"Mixed Gregorian/Julian calendar  (DateTimeStandard)\nProleptic gregorian calendar (DateTimeProlepticGregorian)\nGregorian calendar without leap years (all years are 365 days long) (DateTimeNoLeap)\nGregorian calendar with only leap year (all years are 366 days long) (DateTimeAllLeap)\nA calendar with every year being 360 days long (divided into 30 day months) (DateTime360Day)\nJulian calendar (DateTimeJulian)","category":"page"},{"location":"","page":"CFTime.jl","title":"CFTime.jl","text":"Note that time zones are not supported by CFTime.jl.","category":"page"},{"location":"#Installation","page":"CFTime.jl","title":"Installation","text":"","category":"section"},{"location":"","page":"CFTime.jl","title":"CFTime.jl","text":"Inside the Julia shell, you can download and install the package by issuing:","category":"page"},{"location":"","page":"CFTime.jl","title":"CFTime.jl","text":"using Pkg\nPkg.add(\"CFTime\")","category":"page"},{"location":"#Latest-development-version","page":"CFTime.jl","title":"Latest development version","text":"","category":"section"},{"location":"","page":"CFTime.jl","title":"CFTime.jl","text":"If you want to try the latest development version, you can do this with the following commands:","category":"page"},{"location":"","page":"CFTime.jl","title":"CFTime.jl","text":"using Pkg\nPkg.add(PackageSpec(url=\"https://github.com/JuliaGeo/CFTime.jl\", rev=\"master\"))\nPkg.build(\"CFTime\")","category":"page"},{"location":"#Types","page":"CFTime.jl","title":"Types","text":"","category":"section"},{"location":"","page":"CFTime.jl","title":"CFTime.jl","text":"DateTimeStandard\nDateTimeJulian\nDateTimeProlepticGregorian\nDateTimeAllLeap\nDateTimeNoLeap\nDateTime360Day","category":"page"},{"location":"#CFTime.DateTimeStandard","page":"CFTime.jl","title":"CFTime.DateTimeStandard","text":"DateTimeStandard([Ti::DataType], y, [m, d, h, mi, s, ms]) -> DateTimeStandard\n\nConstruct a DateTimeStandard type by year (y), month (m, default 1), day (d, default 1), hour (h, default 0), minute (mi, default 0), second (s, default 0), millisecond (ms, default 0). All arguments must be convertible to Int64. DateTimeStandard is a subtype of AbstractCFDateTime.\n\nThe netCDF CF calendars are defined in the CF Standard. This type implements the calendar defined as \"standard\".\n\n\n\n\n\nDateTimeStandard(dt::AbstractString, format::AbstractString; locale=\"english\") -> DateTimeStandard\n\nConstruct a DateTimeStandard by parsing the dt date time string following the pattern given in the format string.\n\nnote: Note\nThis function is experimental and might be removed in the future. It relies on some internal function of Dates for parsing the format.\n\n\n\n\n\n","category":"type"},{"location":"#CFTime.DateTimeJulian","page":"CFTime.jl","title":"CFTime.DateTimeJulian","text":"DateTimeJulian([Ti::DataType], y, [m, d, h, mi, s, ms]) -> DateTimeJulian\n\nConstruct a DateTimeJulian type by year (y), month (m, default 1), day (d, default 1), hour (h, default 0), minute (mi, default 0), second (s, default 0), millisecond (ms, default 0). All arguments must be convertible to Int64. DateTimeJulian is a subtype of AbstractCFDateTime.\n\nThe netCDF CF calendars are defined in the CF Standard. This type implements the calendar defined as \"julian\".\n\n\n\n\n\nDateTimeJulian(dt::AbstractString, format::AbstractString; locale=\"english\") -> DateTimeJulian\n\nConstruct a DateTimeJulian by parsing the dt date time string following the pattern given in the format string.\n\nnote: Note\nThis function is experimental and might be removed in the future. It relies on some internal function of Dates for parsing the format.\n\n\n\n\n\n","category":"type"},{"location":"#CFTime.DateTimeProlepticGregorian","page":"CFTime.jl","title":"CFTime.DateTimeProlepticGregorian","text":"DateTimeProlepticGregorian([Ti::DataType], y, [m, d, h, mi, s, ms]) -> DateTimeProlepticGregorian\n\nConstruct a DateTimeProlepticGregorian type by year (y), month (m, default 1), day (d, default 1), hour (h, default 0), minute (mi, default 0), second (s, default 0), millisecond (ms, default 0). All arguments must be convertible to Int64. DateTimeProlepticGregorian is a subtype of AbstractCFDateTime.\n\nThe netCDF CF calendars are defined in the CF Standard. This type implements the calendar defined as \"prolepticgregorian\".\n\n\n\n\n\nDateTimeProlepticGregorian(dt::AbstractString, format::AbstractString; locale=\"english\") -> DateTimeProlepticGregorian\n\nConstruct a DateTimeProlepticGregorian by parsing the dt date time string following the pattern given in the format string.\n\nnote: Note\nThis function is experimental and might be removed in the future. It relies on some internal function of Dates for parsing the format.\n\n\n\n\n\n","category":"type"},{"location":"#CFTime.DateTimeAllLeap","page":"CFTime.jl","title":"CFTime.DateTimeAllLeap","text":"DateTimeAllLeap([Ti::DataType], y, [m, d, h, mi, s, ms]) -> DateTimeAllLeap\n\nConstruct a DateTimeAllLeap type by year (y), month (m, default 1), day (d, default 1), hour (h, default 0), minute (mi, default 0), second (s, default 0), millisecond (ms, default 0). All arguments must be convertible to Int64. DateTimeAllLeap is a subtype of AbstractCFDateTime.\n\nThe netCDF CF calendars are defined in the CF Standard. This type implements the calendar defined as \"allleap\".\n\n\n\n\n\nDateTimeAllLeap(dt::AbstractString, format::AbstractString; locale=\"english\") -> DateTimeAllLeap\n\nConstruct a DateTimeAllLeap by parsing the dt date time string following the pattern given in the format string.\n\nnote: Note\nThis function is experimental and might be removed in the future. It relies on some internal function of Dates for parsing the format.\n\n\n\n\n\n","category":"type"},{"location":"#CFTime.DateTimeNoLeap","page":"CFTime.jl","title":"CFTime.DateTimeNoLeap","text":"DateTimeNoLeap([Ti::DataType], y, [m, d, h, mi, s, ms]) -> DateTimeNoLeap\n\nConstruct a DateTimeNoLeap type by year (y), month (m, default 1), day (d, default 1), hour (h, default 0), minute (mi, default 0), second (s, default 0), millisecond (ms, default 0). All arguments must be convertible to Int64. DateTimeNoLeap is a subtype of AbstractCFDateTime.\n\nThe netCDF CF calendars are defined in the CF Standard. This type implements the calendar defined as \"noleap\".\n\n\n\n\n\nDateTimeNoLeap(dt::AbstractString, format::AbstractString; locale=\"english\") -> DateTimeNoLeap\n\nConstruct a DateTimeNoLeap by parsing the dt date time string following the pattern given in the format string.\n\nnote: Note\nThis function is experimental and might be removed in the future. It relies on some internal function of Dates for parsing the format.\n\n\n\n\n\n","category":"type"},{"location":"#CFTime.DateTime360Day","page":"CFTime.jl","title":"CFTime.DateTime360Day","text":"DateTime360Day([Ti::DataType], y, [m, d, h, mi, s, ms]) -> DateTime360Day\n\nConstruct a DateTime360Day type by year (y), month (m, default 1), day (d, default 1), hour (h, default 0), minute (mi, default 0), second (s, default 0), millisecond (ms, default 0). All arguments must be convertible to Int64. DateTime360Day is a subtype of AbstractCFDateTime.\n\nThe netCDF CF calendars are defined in the CF Standard. This type implements the calendar defined as \"360day\".\n\n\n\n\n\nDateTime360Day(dt::AbstractString, format::AbstractString; locale=\"english\") -> DateTime360Day\n\nConstruct a DateTime360Day by parsing the dt date time string following the pattern given in the format string.\n\nnote: Note\nThis function is experimental and might be removed in the future. It relies on some internal function of Dates for parsing the format.\n\n\n\n\n\n","category":"type"},{"location":"#Time-encoding-and-decoding","page":"CFTime.jl","title":"Time encoding and decoding","text":"","category":"section"},{"location":"","page":"CFTime.jl","title":"CFTime.jl","text":"CFTime.timedecode\nCFTime.timeencode","category":"page"},{"location":"#CFTime.timedecode","page":"CFTime.jl","title":"CFTime.timedecode","text":"dt = timedecode(data,units,calendar = \"standard\"; prefer_datetime = true)\n\nDecode the time information in data as given by the units units according to the specified calendar. Valid values for calendar are \"standard\", \"gregorian\", \"proleptic_gregorian\", \"julian\", \"noleap\", \"365_day\", \"all_leap\", \"366_day\" and \"360_day\".\n\nIf prefer_datetime is true (default), dates are converted to the DateTime type (for the calendars \"standard\", \"gregorian\", \"proleptic_gregorian\" and \"julian\") unless the time unit is expressed in microseconds or smaller. Such conversion is not possible for the other calendars.\n\nCalendar Type (prefer_datetime=true) Type (prefer_datetime=false)\nstandard, gregorian DateTime DateTimeStandard\nproleptic_gregorian DateTime DateTimeProlepticGregorian\njulian DateTime DateTimeJulian\nnoleap, 365_day DateTimeNoLeap DateTimeNoLeap\nall_leap, 366_day DateTimeAllLeap DateTimeAllLeap\n360_day DateTime360Day DateTime360Day\n\nExample:\n\nusing CFTime, Dates\n# standard calendar\ndt = CFTime.timedecode([0,1,2,3],\"days since 2000-01-01 00:00:00\")\n# 4-element Array{Dates.DateTime,1}:\n#  2000-01-01T00:00:00\n#  2000-01-02T00:00:00\n#  2000-01-03T00:00:00\n#  2000-01-04T00:00:00\n\ndt = CFTime.timedecode([0,1,2,3],\"days since 2000-01-01 00:00:00\",\"360_day\")\n# 4-element Array{DateTime360Day,1}:\n#  DateTime360Day(2000-01-01T00:00:00)\n#  DateTime360Day(2000-01-02T00:00:00)\n#  DateTime360Day(2000-01-03T00:00:00)\n#  DateTime360Day(2000-01-04T00:00:00)\n\n\n\n\n\n","category":"function"},{"location":"#CFTime.timeencode","page":"CFTime.jl","title":"CFTime.timeencode","text":"data = timeencode(dt,units,calendar = \"standard\")\n\nConvert a vector or array of DateTime (or DateTimeStandard, DateTimeProlepticGregorian, DateTimeJulian, DateTimeNoLeap, DateTimeAllLeap, DateTime360Day) according to the specified units (e.g. \"days since 2000-01-01 00:00:00\") using the calendar calendar.  Valid values for calendar are: \"standard\", \"gregorian\", \"proleptic_gregorian\", \"julian\", \"noleap\", \"365_day\", \"all_leap\", \"366_day\", \"360_day\".\n\n\n\n\n\n","category":"function"},{"location":"#Accessor-Functions","page":"CFTime.jl","title":"Accessor Functions","text":"","category":"section"},{"location":"","page":"CFTime.jl","title":"CFTime.jl","text":"CFTime.year(dt::AbstractCFDateTime)\nCFTime.month(dt::AbstractCFDateTime)\nCFTime.day(dt::AbstractCFDateTime)\nCFTime.hour(dt::AbstractCFDateTime)\nCFTime.minute(dt::AbstractCFDateTime)\nCFTime.second(dt::AbstractCFDateTime)\nCFTime.millisecond(dt::AbstractCFDateTime)\nCFTime.microsecond(dt::AbstractCFDateTime)\nCFTime.nanosecond(dt::AbstractCFDateTime)\nCFTime.picosecond(dt::AbstractCFDateTime)\nCFTime.femtosecond(dt::AbstractCFDateTime)\nCFTime.attosecond(dt::AbstractCFDateTime)","category":"page"},{"location":"#Dates.year-Tuple{AbstractCFDateTime}","page":"CFTime.jl","title":"Dates.year","text":"Dates.year(dt::AbstractCFDateTime) -> Int64\n\nExtract the year part of an AbstractCFDateTime as an Int64.\n\n\n\n\n\n","category":"method"},{"location":"#Dates.month-Tuple{AbstractCFDateTime}","page":"CFTime.jl","title":"Dates.month","text":"Dates.month(dt::AbstractCFDateTime) -> Int64\n\nExtract the month part of an AbstractCFDateTime as an Int64.\n\n\n\n\n\n","category":"method"},{"location":"#Dates.day-Tuple{AbstractCFDateTime}","page":"CFTime.jl","title":"Dates.day","text":"Dates.day(dt::AbstractCFDateTime) -> Int64\n\nExtract the day part of an AbstractCFDateTime as an Int64.\n\n\n\n\n\n","category":"method"},{"location":"#Dates.hour-Tuple{AbstractCFDateTime}","page":"CFTime.jl","title":"Dates.hour","text":"Dates.hour(dt::AbstractCFDateTime) -> Int64\n\nExtract the hour part of an AbstractCFDateTime as an Int64.\n\n\n\n\n\n","category":"method"},{"location":"#Dates.minute-Tuple{AbstractCFDateTime}","page":"CFTime.jl","title":"Dates.minute","text":"Dates.minute(dt::AbstractCFDateTime) -> Int64\n\nExtract the minute part of an AbstractCFDateTime as an Int64.\n\n\n\n\n\n","category":"method"},{"location":"#Dates.second-Tuple{AbstractCFDateTime}","page":"CFTime.jl","title":"Dates.second","text":"Dates.second(dt::AbstractCFDateTime) -> Int64\n\nExtract the second part of an AbstractCFDateTime as an Int64.\n\n\n\n\n\n","category":"method"},{"location":"#Dates.millisecond-Tuple{AbstractCFDateTime}","page":"CFTime.jl","title":"Dates.millisecond","text":"Dates.millisecond(dt::AbstractCFDateTime) -> Int64\n\nExtract the millisecond part of an AbstractCFDateTime as an Int64.\n\n\n\n\n\n","category":"method"},{"location":"#Dates.microsecond-Tuple{AbstractCFDateTime}","page":"CFTime.jl","title":"Dates.microsecond","text":"Dates.microsecond(dt::AbstractCFDateTime) -> Int64\n\nExtract the microsecond part of an AbstractCFDateTime as an Int64.\n\n\n\n\n\n","category":"method"},{"location":"#Dates.nanosecond-Tuple{AbstractCFDateTime}","page":"CFTime.jl","title":"Dates.nanosecond","text":"Dates.nanosecond(dt::AbstractCFDateTime) -> Int64\n\nExtract the nanosecond part of an AbstractCFDateTime as an Int64.\n\n\n\n\n\n","category":"method"},{"location":"#CFTime.picosecond-Tuple{AbstractCFDateTime}","page":"CFTime.jl","title":"CFTime.picosecond","text":"CFTime.picosecond(dt::AbstractCFDateTime) -> Int64\n\nExtract the picosecond part of an AbstractCFDateTime as an Int64.\n\n\n\n\n\n","category":"method"},{"location":"#CFTime.femtosecond-Tuple{AbstractCFDateTime}","page":"CFTime.jl","title":"CFTime.femtosecond","text":"CFTime.femtosecond(dt::AbstractCFDateTime) -> Int64\n\nExtract the femtosecond part of an AbstractCFDateTime as an Int64.\n\n\n\n\n\n","category":"method"},{"location":"#CFTime.attosecond-Tuple{AbstractCFDateTime}","page":"CFTime.jl","title":"CFTime.attosecond","text":"CFTime.attosecond(dt::AbstractCFDateTime) -> Int64\n\nExtract the attosecond part of an AbstractCFDateTime as an Int64.\n\n\n\n\n\n","category":"method"},{"location":"#Query-Functions","page":"CFTime.jl","title":"Query Functions","text":"","category":"section"},{"location":"","page":"CFTime.jl","title":"CFTime.jl","text":"daysinmonth\ndaysinyear\nyearmonthday\nyearmonth\nmonthday\nfirstdayofyear\ndayofyear","category":"page"},{"location":"#Dates.daysinmonth","page":"CFTime.jl","title":"Dates.daysinmonth","text":"monthlength = daysinmonth(::Type{DT},y,m)\n\nReturns the number of days in a month for the year y and the month m according to the calendar given by the type DT.\n\nExample\n\njulia> daysinmonth(DateTimeAllLeap,2001,2)\n29\n\n\n\n\n\nmonthlength = daysinmonth(t)\n\nReturns the number of days in a month containing the date t\n\nExample\n\njulia> daysinmonth(DateTimeAllLeap(2001,2,1))\n29\n\n\n\n\n\n","category":"function"},{"location":"#Dates.daysinyear","page":"CFTime.jl","title":"Dates.daysinyear","text":"yearlength = daysinyear(::Type{DT},y)\n\nReturns the number of days in a year for the year y according to the calendar given by the type DT.\n\nExample\n\njulia> daysinyear(DateTimeAllLeap,2001,2)\n366\n\n\n\n\n\nyearlength = daysinyear(t)\n\nReturns the number of days in a year containing the date t\n\nExample\n\njulia> daysinyear(DateTimeAllLeap(2001,2,1))\n366\n\n\n\n\n\n","category":"function"},{"location":"#Dates.yearmonthday","page":"CFTime.jl","title":"Dates.yearmonthday","text":"yearmonthday(dt::AbstractCFDateTime) -> (Int64, Int64, Int64)\n\nSimultaneously return the year, month and day parts of dt.\n\n\n\n\n\n","category":"function"},{"location":"#Dates.yearmonth","page":"CFTime.jl","title":"Dates.yearmonth","text":"yearmonth(dt::AbstractCFDateTime) -> (Int64, Int64)\n\nSimultaneously return the year and month parts of dt.\n\n\n\n\n\n","category":"function"},{"location":"#Dates.monthday","page":"CFTime.jl","title":"Dates.monthday","text":"monthday(dt::AbstractCFDateTime) -> (Int64, Int64)\n\nSimultaneously return the month and day parts of dt.\n\n\n\n\n\n","category":"function"},{"location":"#Dates.firstdayofyear","page":"CFTime.jl","title":"Dates.firstdayofyear","text":"firstdayofyear(dt::AbstractCFDateTime) -> Int\n\nReturn the first day of the year including the date dt\n\n\n\n\n\n","category":"function"},{"location":"#Dates.dayofyear","page":"CFTime.jl","title":"Dates.dayofyear","text":"dayofyear(dt::AbstractCFDateTime) -> Int\n\nReturn the day of the year for dt with January 1st being day 1.\n\n\n\n\n\n","category":"function"},{"location":"#Convertion-Functions","page":"CFTime.jl","title":"Convertion Functions","text":"","category":"section"},{"location":"","page":"CFTime.jl","title":"CFTime.jl","text":"convert\nreinterpret","category":"page"},{"location":"#Base.convert","page":"CFTime.jl","title":"Base.convert","text":"dt2 = convert(::Type{T}, dt)\n\nConvert a DateTime of type DateTimeStandard, DateTimeProlepticGregorian, DateTimeJulian or DateTime into the type T which can also be either DateTimeStandard, DateTimeProlepticGregorian, DateTimeJulian or DateTime.\n\nConversion is done such that duration (difference of DateTime types) are preserved. For dates on and after 1582-10-15, the year, month and days are the same for the types DateTimeStandard, DateTimeProlepticGregorian and DateTime.\n\nFor dates before 1582-10-15, the year, month and days are the same for the types DateTimeStandard and DateTimeJulian.\n\n\n\n\n\ndt2 = convert(::Type{T}, dt)\n\nConvert a DateTime of type DateTimeStandard, DateTimeProlepticGregorian, DateTimeJulian or DateTime into the type T which can also be either DateTimeStandard, DateTimeProlepticGregorian, DateTimeJulian or DateTime.\n\nConversion is done such that duration (difference of DateTime types) are preserved. For dates on and after 1582-10-15, the year, month and days are the same for the types DateTimeStandard, DateTimeProlepticGregorian and DateTime.\n\nFor dates before 1582-10-15, the year, month and days are the same for the types DateTimeStandard and DateTimeJulian.\n\n\n\n\n\ndt2 = convert(::Type{T}, dt)\n\nConvert a DateTime of type DateTimeStandard, DateTimeProlepticGregorian, DateTimeJulian or DateTime into the type T which can also be either DateTimeStandard, DateTimeProlepticGregorian, DateTimeJulian or DateTime.\n\nConversion is done such that duration (difference of DateTime types) are preserved. For dates on and after 1582-10-15, the year, month and days are the same for the types DateTimeStandard, DateTimeProlepticGregorian and DateTime.\n\nFor dates before 1582-10-15, the year, month and days are the same for the types DateTimeStandard and DateTimeJulian.\n\n\n\n\n\n","category":"function"},{"location":"#Base.reinterpret","page":"CFTime.jl","title":"Base.reinterpret","text":"dt2 = reinterpret(::Type{T}, dt)\n\nConvert a variable dt of type DateTime, DateTimeStandard, DateTimeJulian, DateTimeProlepticGregorian, DateTimeAllLeap, DateTimeNoLeap or DateTime360Day into the date time type T using the same values for year, month, day, minute, second and millisecond. The conversion might fail if a particular date does not exist in the target calendar.\n\n\n\n\n\n","category":"function"},{"location":"#Arithmetic","page":"CFTime.jl","title":"Arithmetic","text":"","category":"section"},{"location":"","page":"CFTime.jl","title":"CFTime.jl","text":"Adding and subtracting time periods is supported:","category":"page"},{"location":"","page":"CFTime.jl","title":"CFTime.jl","text":"DateTimeStandard(1582,10,4) + Dates.Day(1)\n# returns DateTimeStandard(1582-10-15T00:00:00)","category":"page"},{"location":"","page":"CFTime.jl","title":"CFTime.jl","text":"1582-10-15 is the adoption of the Gregorian Calendar.","category":"page"},{"location":"","page":"CFTime.jl","title":"CFTime.jl","text":"Comparision operator can be used to check if a date is before or after another date.","category":"page"},{"location":"","page":"CFTime.jl","title":"CFTime.jl","text":"DateTimeStandard(2000,01,01) < DateTimeStandard(2000,01,02)\n# returns true","category":"page"},{"location":"","page":"CFTime.jl","title":"CFTime.jl","text":"Time ranges can be constructed using a start date, end date and a time increment, for example: DateTimeStandard(2000,1,1):Dates.Day(1):DateTimeStandard(2000,12,31)","category":"page"},{"location":"#Rounding","page":"CFTime.jl","title":"Rounding","text":"","category":"section"},{"location":"","page":"CFTime.jl","title":"CFTime.jl","text":"using CFTime: DateTimeStandard\nusing Dates: DateTime\ndt = DateTimeStandard(24*60*60*1000*1000 + 123,\"microsecond since 2000-01-01\")\nround(DateTime,dt)\n# output\n\n2000-01-02T00:00:00","category":"page"},{"location":"","page":"CFTime.jl","title":"CFTime.jl","text":"using Dates: DateTime, Second\nusing CFTime: DateTimeStandard\n\ndt = DateTimeStandard(24*60*60,\"second since 2000-01-01\")\n\nfloor(dt+Second(9),Second(10)) == dt\n# output\n\ntrue\n\nceil(dt+Second(9),Second(10)) == dt + Second(10)\n# output\n\ntrue\n\nround(dt+Second(9),Second(10)) == dt + Second(10)\n# output\n\ntrue","category":"page"}]
}
