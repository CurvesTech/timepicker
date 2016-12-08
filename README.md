# Timepicker

This is a simple jquery, bootstrap & fontawesome based time picker plugin. I needed something simple and easy to use, and 
hence ended up writing this. 

## Download
You can use it by downloading the repository as zip file.

### Using Bower
to install it using bower do 
    bower install ct_timepicker
    
## How to Use

1. Include the `css/timepicker.css` in the head of your website. 
2. Include the `js/timepicker.js` after you have included the scripts for `jquery` and `bootstrap`.
3. Assign the class `ct_timepicker` to any of your `input` elements and the timepicker control will replace it.
e.g.
    <input type="text" name="sometime" class="ct_timepicker">

### Initialize with Value

You can also initialize the control by having set the 24 hrs format time in the `value` attribute of the element `input` element
bound with the control.

e.g. 
    <input type="text" value="13:01" name="sometime" class="ct_timepicker">
    
If you want to make any improvements please submit pull requests, or file issues so we can make it better together.

