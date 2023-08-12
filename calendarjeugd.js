document.addEventListener('DOMContentLoaded', function () {
   var calendarEl = document.getElementById('calendar');
   var calendar = new FullCalendar.Calendar(calendarEl, {
      // Your calendar configuration options here
      plugins: ['interaction'],
      headerToolbar: {
         left: 'prev,next today',
         center: 'title',
         right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      initialDate: new Date(),
      editable: true,
      selectable: true,
      selectMirror: true,
      select: function (arg) {
         var title = prompt('Event Title:');
         if (title) {
            calendar.addEvent({
               title: title,
               start: arg.start,
               end: arg.end,
               allDay: arg.allDay
            });
         }
         calendar.unselect();
      },
      events: events
   });
   calendar.render();
});
