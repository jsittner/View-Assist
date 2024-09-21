# Timers

Timers are finally here!  This automation will allow you to set timers, alarms and reminders by voice

## Requirements
* Must have Pyscript installed.  See [installation video](https://www.youtube.com/watch?v=jpJxZaisbGQ)
* Copy ```viewassist-timers.py``` into your pyscripts directory
* Create [alarm view](https://raw.githubusercontent.com/dinki/View-Assist/viewassist-timers/View%20Assist%20dashboard%20and%20views/views/alarm/alarm.yaml)
## Dev Notes
* Things not working:
  * ~Cannot cancel alarm~
  * ~cannot list time remaining~
  * Cannot list alarm
  * ~Snooze (need to rewrite to use service instead of calendar)~
  * Snooze works but have to press the button twice??!
  * Handle case with timer_list does not exist
  * Add write to disk persistence
  * move seconds, minutes, hours, days, weeks, etc to pyscript call for setting timers in other automations (eg play sound machine for 20 minutes) 
* Pyscript functions will be renamed and additional function for cancelling will be added

This is a big work in progress.  By far this is the most complicated automation to date.  Thanks for your patience.  What is posted is fully working but not fully polished in terms of presentation and features.
