/**
 * 
 * @authors cherish yii2 (cherish@cherish.pw)
 * @date    2020-12-10 16:48:28
 * @version v1.0
 * @description the core js of todolist project
 * 
 * ━━━━━━神兽出没━━━━━━
 * 　　   ┏┓　 ┏┓
 * 　┏━━━━┛┻━━━┛┻━━━┓
 * 　┃              ┃
 * 　┃       ━　    ┃
 * 　┃　  ┳┛ 　┗┳   ┃
 * 　┃              ┃
 * 　┃       ┻　    ┃
 * 　┃              ┃
 * 　┗━━━┓      ┏━━━┛ Code is far away from bugs with the animal protecting.
 *       ┃      ┃     神兽保佑,代码无bug。
 *       ┃      ┃
 *       ┃      ┗━━━┓
 *       ┃      　　┣┓
 *       ┃      　　┏┛
 *       ┗━┓┓┏━━┳┓┏━┛
 *     　  ┃┫┫　┃┫┫
 *     　  ┗┻┛　┗┻┛
 *
 * ━━━━━━感觉萌萌哒━━━━━━
 */

// 请根据考试说明文档中列出的需求进行作答
// 预祝各位顺利通过本次考试，see you next week！
// ...


    let list = localStorage.getItem('list') || []
    if(!list) return
    bind()
    function bind () {
        if (list != []) {
            let str = ''
            for (let i = 0;i < list.length;i++) {
                str += `
                <li>
                    <input type="checkbox" data-id=${list[i].id} class="check" />
                    <p onclick="edit(${list[i].id})">${list[i].content}</p>
                    <a href="javascript:remove(${list[i].id})">-</a>
                <>
                `
            }
            $('#todolist').html(str)
            $('#todocount').text($('#todolist > li').length)
        }
        add()
    }
    function add() {
        $('#title').on('keydown',function(e){
            const code = e.keyCode || e.which
            if(code === 13) e.preventDefault()
        })

        $(window).on('keyup',function(e){
            const code = e.keyCode || e.which
            if(!(code === 13)){
                return
            }
            if($('#title').val().trim()){
                let message = {
                    id: list.length++,
                    content: $('#title').val()
                }

                list.push(message)

                localStorage.setItem('list',JSON.stringify(list))
                $('#title').val('')
                bind()
            }
        })
    }
    


    