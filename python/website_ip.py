import socket
print('Website IP Address Finder')

# function to find IP address
def ip():
    try:
        url = input('Enter website url: ')
        print(f'IP address of "{url}" is {socket.gethostbyname(url)}')
    except:
        print('Please enter valid url')

ip()

# while true, loop for calling function again
while(1):
    input_ = input('Do you want to search again?(y/n) ')
    if input_ == 'y':
        ip()
    else:
        print('Thanks for using it.')
        break

