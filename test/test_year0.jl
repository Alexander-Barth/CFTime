using CFTime
using Test
using Dates: DateTime


dt = CFTime.timedecode(0,"days since 0001-01-01",prefer_datetime = false)
@test dt == DateTimeStandard(1,1,1)

# https://www.fourmilab.ch/documents/calendar/
dt = CFTime.timedecode(0,"days since 0001-01-01") # julian
@test dt == DateTime(0,12,30)


dt = CFTime.timedecode(0,"days since 0001-01-01", "proleptic_gregorian")
@test dt == DateTime(1,1,1)

#=
import netCDF4

dates = netCDF4.num2date([-1],units="days since 0001-01-01",calendar="proleptic_gregorian")
print("dates",dates)

=#
dt = CFTime.timedecode(-1,"days since 0001-01-01", "proleptic_gregorian")
@test dt == DateTime(0,12,31)
