/**
 * 判断SQ MV
 * @param type
 * @param data
 * @returns {boolean}
 */
const isPrivilege = (type, data) => {
    if(!type || !data) return;
    let result = false;
    switch (type) {
        case 'sq':
            result = data.maxbr === 999000;
            break;
        case 'mv':
            result = !!data.mvid;
            break;
    }
    return result;
};

export default {
    isPrivilege
}