export function countTask(list, flag) {
    return (list.filter((item) => item.taskFlag === flag)).length;
}