'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../../../../components/ui/card';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '../../../../components/ui/table';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../../../../components/ui/select';
import { Input } from '../../../../components/ui/input';
import { Button } from '../../../../components/ui/button';
import {
    ChevronDown,
    ChevronRight,
    Search,
    Rocket,
    Star,
    ArrowRight,
    ExternalLink,
    Mail,
} from 'lucide-react';
import { useToast } from "../../../../components/hooks/use-toast";

// Helper function to group internships by firm
const groupInternshipsByFirm = (data) => {
    const grouped = {};
    let currentFirm = '';

    data.forEach(item => {
        if (item.Firms !== '') {
            currentFirm = item.Firms;
            grouped[currentFirm] = grouped[currentFirm] || [];
        }
        grouped[currentFirm].push({
            program: item.Program,
            class: item.Class,
            deadline: item["Application Deadline"],
            targetGroup: item["Target Group"],
            links: item.Links
        });
    });

    return grouped;
};

// Helper function to check if string is a valid URL
const isValidUrl = (string) => {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
};

// Helper function to check if string is an email
const isEmail = (string) => {
    return string.toLowerCase().includes('@') || string.toLowerCase().includes('contact');
};

export default function InternshipsTable() {
    const { toast } = useToast();
    const [groupedData, setGroupedData] = useState({});
    const [searchTerm, setSearchTerm] = useState('');
    const [classFilter, setClassFilter] = useState('all');
    const [targetGroupFilter, setTargetGroupFilter] = useState('all');
    const [expandedFirms, setExpandedFirms] = useState(new Set());
    const [loading, setLoading] = useState(true);

    // Load and process data
    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetch('/data/internships.json');
                const data = await response.json();
                const grouped = groupInternshipsByFirm(data);
                setGroupedData(grouped);
            } catch (error) {
                console.error('Error loading internships data:', error);
                toast({
                    variant: "destructive",
                    title: "Error",
                    description: "Failed to load internships data",
                });
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    // Toggle firm expansion
    const toggleFirmExpansion = (firm) => {
        const newExpanded = new Set(expandedFirms);
        if (newExpanded.has(firm)) {
            newExpanded.delete(firm);
        } else {
            newExpanded.add(firm);
        }
        setExpandedFirms(newExpanded);
    };

    // Handle link click
    const handleLinkClick = (link) => {
        if (isEmail(link)) {
            const email = link.replace(/^Contact\s+/i, '');
            navigator.clipboard.writeText(email);
            toast({
                title: "Success",
                description: "Email copied to clipboard!",
            });
        }
    };

    // Filter function
    const filterInternships = (programs, firm) => {
        return programs.filter(program => {
            const matchesSearch = (
                program.program.toLowerCase().includes(searchTerm.toLowerCase()) ||
                firm.toLowerCase().includes(searchTerm.toLowerCase()) ||
                program.targetGroup.toLowerCase().includes(searchTerm.toLowerCase())
            );

            const matchesClass = classFilter === 'all' || program.class.toLowerCase().includes(classFilter.toLowerCase());
            const matchesTargetGroup = targetGroupFilter === 'all' || program.targetGroup.toLowerCase().includes(targetGroupFilter.toLowerCase());

            return matchesSearch && matchesClass && matchesTargetGroup;
        });
    };

    // Render link button based on type
    const renderLinkButton = (link) => {
        if (isValidUrl(link)) {
            return (
                <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    asChild
                >
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                    >
                        Apply
                        <ExternalLink className="ml-2 h-3 w-3" />
                    </a>
                </Button>
            );
        }

        if (isEmail(link)) {
            return (
                <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => handleLinkClick(link)}
                >
                    <Mail className="mr-2 h-3 w-3" />
                    Copy Email
                </Button>
            );
        }

        return (
            <Button
                variant="outline"
                size="sm"
                className="w-full"
                disabled
            >
                Coming Soon
            </Button>
        );
    };

    if (loading) {
        return (
            <div className="container mx-auto p-6">
                <Card>
                    <CardContent className="flex items-center justify-center min-h-[400px]">
                        <div className="text-center">Loading internships data...</div>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-6">
            <Card className='mb-8 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900'>
                <CardHeader>
                    <CardTitle className='text-2xl font-bold flex items-center text-yellow-600 dark:text-yellow-400'>
                        <Rocket className='h-6 w-6 mr-2' />
                        Why Pursue Leadership & Pathway Programs?
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className='list-none pl-5 space-y-2'>
                        {[
                            'Early access to exclusive internship opportunities - Students in these programs are 80% more likely to secure internships',
                            'Direct mentorship from industry professionals at Fortune 500 companies',
                            'Specialized training and development through curated workshops and projects',
                            'Build a strong professional network before traditional internship recruitment',
                            'Gain insider knowledge of company culture and hiring processes',
                            'Fast-track your career with programs specifically designed for your academic year',
                            'Access to diversity initiatives and specialized career development resources',
                        ].map((item, index) => (
                            <li key={index} className='flex items-start'>
                                <ArrowRight className='h-5 w-5 mr-2 text-yellow-500 flex-shrink-0 mt-1' />
                                <span className='text-gray-700 dark:text-gray-200'>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-6 bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-yellow-600 dark:text-yellow-400 mb-2 flex items-center">
                            <Star className="h-5 w-5 mr-2" />
                            Program Success Rates
                        </h3>
                        <p className="text-gray-700 dark:text-gray-200 mb-4">
                            Students who participate in Leadership & Pathway programs are significantly more likely to secure Internship positions at top companies.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="text-center p-3 bg-white/80 dark:bg-gray-700/80 rounded-lg">
                                <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">80%</div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">Higher Internship Placement</div>
                            </div>
                            <div className="text-center p-3 bg-white/80 dark:bg-gray-700/80 rounded-lg">
                                <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">90%</div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">Program Satisfaction</div>
                            </div>
                            <div className="text-center p-3 bg-white/80 dark:bg-gray-700/80 rounded-lg">
                                <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">3x</div>
                                <div className="text-sm text-gray-600 dark:text-gray-300">Interview Success Rate</div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card className="mb-6">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold">Internship Opportunities</CardTitle>
                    <CardDescription>
                        Browse through our comprehensive database of internship programs
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {/* Filters Section */}
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    placeholder="Search internships..."
                                    className="pl-8"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </div>
                        </div>
                        <Select value={classFilter} onValueChange={setClassFilter}>
                            <SelectTrigger className="w-[200px]">
                                <SelectValue placeholder="Class Year" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Years</SelectItem>
                                <SelectItem value="freshmen">Freshmen</SelectItem>
                                <SelectItem value="sophomore">Sophomores</SelectItem>
                                <SelectItem value="junior">Juniors</SelectItem>
                                <SelectItem value="senior">Seniors</SelectItem>
                            </SelectContent>
                        </Select>
                        <Select value={targetGroupFilter} onValueChange={setTargetGroupFilter}>
                            <SelectTrigger className="w-[200px]">
                                <SelectValue placeholder="Target Group" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Groups</SelectItem>
                                <SelectItem value="women">Women</SelectItem>
                                <SelectItem value="black">Black</SelectItem>
                                <SelectItem value="hispanic">Hispanic/Latinx</SelectItem>
                                <SelectItem value="lgbtq">LGBTQ+</SelectItem>
                                <SelectItem value="veteran">Veterans</SelectItem>
                                <SelectItem value="disability">Disability</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Table Section */}
                    <div className="rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-[30px]"></TableHead>
                                    <TableHead>Company/Program</TableHead>
                                    <TableHead>Class Year</TableHead>
                                    <TableHead>Application Deadline</TableHead>
                                    <TableHead>Target Group</TableHead>
                                    <TableHead className="w-[100px]">Action</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {Object.entries(groupedData).map(([firm, programs]) => {
                                    const filteredPrograms = filterInternships(programs, firm);
                                    if (filteredPrograms.length === 0) return null;

                                    return (
                                        <React.Fragment key={firm}>
                                            {/* Firm Row */}
                                            <TableRow
                                                className="bg-muted/50 cursor-pointer hover:bg-muted"
                                                onClick={() => toggleFirmExpansion(firm)}
                                            >
                                                <TableCell>
                                                    {expandedFirms.has(firm) ? (
                                                        <ChevronDown className="h-4 w-4" />
                                                    ) : (
                                                        <ChevronRight className="h-4 w-4" />
                                                    )}
                                                </TableCell>
                                                <TableCell colSpan={5} className="font-medium">
                                                    {firm} ({filteredPrograms.length} Programs)
                                                </TableCell>
                                            </TableRow>

                                            {/* Program Rows */}
                                            {expandedFirms.has(firm) && filteredPrograms.map((program, index) => (
                                                <TableRow key={`${firm}-${index}`} className="bg-background">
                                                    <TableCell></TableCell>
                                                    <TableCell className="font-medium">{program.program}</TableCell>
                                                    <TableCell>{program.class}</TableCell>
                                                    <TableCell>{program.deadline}</TableCell>
                                                    <TableCell>{program.targetGroup}</TableCell>
                                                    <TableCell>
                                                        {renderLinkButton(program.links)}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </React.Fragment>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}