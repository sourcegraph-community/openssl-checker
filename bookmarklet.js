// version 0.0.3
// Generate bookmarklet: https://caiorss.github.io/bookmarklet-maker/

var newURL = window.location.host + window.location.pathname

window.location.href = 'https://sourcegraph.com/search/console' +
                        '?q=repo%3A' +
                        newURL +
                             '%0A%0Apatterntype%3Aregexp%20%0A%0A(f%3ACargo.lock%20openssl-src%20AND%20version%5Cs*%3D%5Cs*"300%5C.%5B0-9%5C.%5D%2B%5C%2B3%5C.0%5C.%5B0-6%5D)%0A%0Aor%0A%0A(f%3Arequirements.*txt%20cryptography(%5Cs*%5B%3D~%5D%3D%5Cs*(36%5C.%7C37%5C.%7C38%5C.0%5C.%5B0-2%5D)))%20OR%20(f%3Apoetry.lock%20name%5Cs*%3D%5Cs*"cryptography"%20AND%20version%5Cs*%3D%5Cs*"(36%5C.%7C37%5C.%7C38%5C.0%5C.%5B0-2%5D))%0A%0Afork%3Ayes%20';