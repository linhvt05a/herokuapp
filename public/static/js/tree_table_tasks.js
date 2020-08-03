$(function () {
    var
        $table = $('#tree-table'),
        rows = $table.find('tr');

    var width_number = 50;


    rows.each(function (index, row) {
        var
            $row = $(row),
            level = $row.data('level'),
            id = $row.data('id'),
            $columnName = $row.find('td[data-column="name"] div[data-column="column-title"]'),
            //$columnName = $row.find('td[data-column="name"]'),

            $columnAssignEmployee = $row.find('td[data-column="name"] div[data-column="assign_employee"]'),

            children = $table.find('tr[data-parent="' + id + '"]');

        if (children.length > 0) {
            var expander = $columnName.find('.fa-angle-down');

            children.hide();

            expander.on('click', function (e) {

                var $target = $(e.target);

                if ($target.hasClass('fa-angle-down')) {

                    $target
                        .removeClass('fa-angle-down')
                        .addClass('fa-angle-up');

                    children.show();
                }
                else {
                    $target
                        .removeClass('fa-angle-up')
                        .addClass('fa-angle-down');

                    reverseHide($table, $row);
                }
            });
        }
        // TH : Task parent
        if (level == 1){

            $columnName.find('.distance').remove();

           if( $columnName.find('i').hasClass('fa-angle-down') || $columnName.find('i').hasClass('fa-angle-up')){

           }
           else
                $columnName.prepend( '<span class="distance" style="width:' + (30*level) + 'px"></span>');
        }
        // TH : Task child
        if (level > 1){

              $columnName.find('.distance').remove();

              if( $columnName.find('i').hasClass('fa-angle-down') || $columnName.find('i').hasClass('fa-angle-up'))
                  $columnName.prepend( '<span class="distance" style="width:' + width_number*(level-1) + 'px"></span>');
              else
                   $columnName.prepend( '<span class="distance" style="width:' + (width_number*(level-1)) + 'px"></span>');
        }

    });

    // Reverse hide all elements
    reverseHide = function (table, element) {
        var
            $element = $(element),
            id = $element.data('id'),
            children = table.find('tr[data-parent="' + id + '"]');

        if (children.length) {
            children.each(function (i, e) {
                reverseHide(table, e);
            });

            $element
                .find('.fa-angle-down')
                .removeClass('fa-angle-up')
                .addClass('fa-angle-down');

            children.hide();
        }
    };
});
