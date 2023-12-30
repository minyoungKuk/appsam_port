$( ()=> {
    // 콜백패턴
    const handleAjax = (url) => {
        $.ajax({
            url : url,
            method : "GET",
            dataType : "json",

            // 콜백함수
            success : (result) => {
                console.log(result)
                $('#data_here').html('결과' + result.body)
            },
            error : (error) => {
                console.log('에러는' + error + '입니다')
            },
            complete : () => {
                console.log('완')
            }
        })
    }

    // 랜덤 url
    const randomURL_generator = () => {
        const ranNum = Math.floor(Math.random() * 100) + 1
        return 'https://jsonplaceholder.typicode.com/posts/' + ranNum
    }

    $('#ajax_button').on('click', () => {
        handleAjax(randomURL_generator());
    })
})




$(() => {

    // axios 체이닝 패턴
    const handleAxios = (url) => {
        aixos.get(url)
        .then((result) => {
            console.log(result + '결과')
        })
        .then(() => {
            console.log('2번째 결과')
        })
        .catch((error) => {
            console.log(error + '요건 에러')
        })
        .finally(() => {
            console.log('호출 완료')
        })
    }

    // axios async-await 패턴 [await는 async안에서만 사용 가능]
    const handleAxiosAsync = async(url) => {
        try {
            const result = await aixos.get(url);
            console.log(result + '이것이 결과입니다')

            if (result !== '성공') {
                throw new Error('에러 발생')
            }
        }
        catch(error) {
            console.log(error + '이것이 에러')
        }
        finally {
            // 어찌되던 실행 ^.^
            console.log('호출 완')
        }
    }
})