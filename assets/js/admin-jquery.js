(function($,wp){
    $(document).ready(function(){
        $('.devvn_add_esms').on('click',function () {
            var sanpham = wp.template('devvn-tresms');
            var sanpham_tbody = $('.esms_tbody > tr').length;
            $('.esms_tbody').append( sanpham( {
                stt:  parseInt(sanpham_tbody)
            } ) );
            return false;
        });
        function reload_sort_loaisp() {
            $('.esms_tbody > tr').each(function (index, row) {
                $('input[type="text"], input[type="number"], select, textarea', row ).each( function( i, el ) {
                    var t = $(el);
                    t.attr( 'name', t.attr('name').replace(/\[id_([^[]*)\]/, "[id_" + index + "]" ) );
                });
            });
        }
        $('body').on('click','.devvn_delete_esms',function () {
            var thisTr = $(this).closest('tr');
            thisTr.fadeOut(400,function () {
                $(this).remove();
                reload_sort_loaisp();
            });
            return false;
        });
        $('input[name*="[type_api]"]').change(function(){
            var thisVal = $(this).val();
            $('.type_api_table.active').removeClass('active');
            $('#type_api_'+thisVal).addClass('active');
        });
    })
})(jQuery,wp)