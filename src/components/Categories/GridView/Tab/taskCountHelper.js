export function countTask(list, flag) {
    return (list.map((item) => item.data.filter((item) => item.taskFlag === flag))).length;
}