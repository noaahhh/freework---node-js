
#include "stdlib.h"
#include "stdio.h"
#define BUFFERSIZE 6553600 + 500 //32 file * 200 mb + first part approximately

FILE *fp;//file pointer for arshive file
char buffer[BUFFERSIZE]; //the buffer for arshive file 
int  fp2; // file pointer for extracting files
int sizes[204800];//file sizes integer max 200 mb
int permissions[6];//permissions octal array 
char fullpath[200]="";
struct file
{
    char name[100];
    char permissions[5];
    char size[1000];
    char text[10000];
}files[32];//max 32 file