var hasCycle = function(head) {
    let quick = head, slow = head;
    while(quick!== slow && quick) {
        quick = quick.next.next
        slow = slow.next
    }
};