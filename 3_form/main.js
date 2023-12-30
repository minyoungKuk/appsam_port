// $(() => {
//     $('#formSubmitBtn').on('click', async e => {
//         e.preventDefault();

//         const id = $('#adminForm').find('input[name="id"]').val();
//         const pw = $('#adminForm').find('input[name="pw"]').val();
//         const name = $('#adminForm').find('input[name="name"]').val();
//         const isAdmin = $('#adminForm').find('input[name="isAdmin"]').prop('checked');

//         if (!id) return alert('아이디 미입력');
//         if (!pw) return alert('비밀번호 미입력');
//         if (!name) return alert('이름 미입력');

//         if (id === 'admin') {
//             if (!isAdmin) return alert('관리자 체크 해주세요');
//         } else {
//             if (isAdmin) return alert('관리자가 아니라면 체크하지마세요');
//         }

//         const idReg = /^[a-zA-Z0-9]{5,10}$/;
//         if (!idReg.test(id)) return alert('아이디는 5-10자리의 영문과 숫자만 허용합니다.');

//         const pwReg = /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*()_+={}[\]:;<>,.?/~\\-])[a-zA-Z0-9!@#$%^&*()_+={}[\]:;<>,.?/~\\-]{8,15}$/;
//         if (!pwReg.test(pw)) return alert('비밀번호는 8-15자리의 영문과 숫자만 허용하고, 특수문자를 1개 이상 포함해야 합니다.');

//         const nameReg = /^[가-힣]{2,4}$/;
//         if (!nameReg.test(name)) return alert('이름은 2-4자의 한글만 허용합니다.');

//         alert('전부 합격');
//     });
// });


$(() => {
    $('#formSubmitBtn').on('click', async e => {
        e.preventDefault();

        // 함수로 추출하여 일반화 가능 (리팩토링)
        const id = $('#adminForm').find('input[name="id"]').val();
        const pw = $('#adminForm').find('input[name="pw"]').val();
        const name = $('#adminForm').find('input[name="name"]').val();
        const isAdmin = $('#adminForm').find('input[name="isAdmin"]').prop('checked')

        if (!id) return alert('아이디 미입력')
        if (!pw) return alert('비밀번호 미입력')
        if (!name) return alert('이름 미입력')

        // id가 어드민일때 관리자 체크박스 체크 유무
        if (id === 'admin') {
            if (!isAdmin) return alert ('관리자 체크 해주세요')
        } else {
            if (isAdmin) return alert ('관리자가 아니라면 체크하지마세요')
        }

        // 아이디는 5 ~ 10 영문과 숫자만 허용
        const idReg = /^[a-z0-9]{5, 10}$/
        if(!idReg.test(id)) return alert('아이디는 5-10자리의 영문과 숫자만 허용합니다.')

        const pwReg = /^(?=.*[a-zA-Z0-9])(?=.*[!@#$%^&*()_+={}[\]:;<>,.?/~\\-])[a-zA-Z0-9!@#$%^&*()_+={}[\]:;<>,.?/~\\-]{8,15}$/
        if(!pwReg.test(id)) return alert('비밀번호는 8-15자리의 영문과 숫자만 허용하고, 특수문자를 1개이상 포함 합니다.')

        const nameReg = /^[가-힣]{2,4}$/
        if(!nameReg.test(id)) return alert('이름은 2-4자의 한글만 허용합니다')

        alert('전부 합격')
    })
})                            