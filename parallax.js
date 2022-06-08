$(function(){
    $(window).scroll(function(){
        var windows_scrolltop = $(this).scrollTop()
        
        //Busca cada elemento parallax
        $('.parallax').each(function(){
            var obj = $(this)
            
            //Função para garantir que iremos somente trabalhar co o elemento visivel na tela
            if(windows_scrolltop >= obj.position().top - obj.height() && windows_scrolltop <= obj.position().top + obj.height()){

                //Geração do atributo para controlar a velocidade da animação
                var divisor = typeof obj.attr('data-divisor') == 'undefined' ? 4 : obj.attr('data-divisor')

                //Correção em tela do primeiro elemento
                if(obj.is(':first-child')){
                    var bg_pos = (windows_scrolltop - obj.position().top)/divisor
                }else{
                    var bg_pos = (windows_scrolltop - obj.position().top + (obj.height() - 100))
                }

                //Animação do primeiro texto
                obj.children('.textos').css({
                    'bottom' : (windows_scrolltop  - obj.position().top + 100) + vh
                })
            }
        })
    })
})